import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { countries } from "./data";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

global.fetch = vi.fn();
vi.mock("axios");

describe("HomePage component", async () => {
  const countriesMock = countries.slice(0, 3);

  afterEach(() => {
    axios.get.mockReset();
    global.fetch.mockReset();
  });

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: countriesMock });
    fetch.mockResolvedValue({
      json: () => Promise.resolve(countriesMock),
    });
  });

  test("renders a headline 'WikiCountries: Your Guide to the World'", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const headlineText = /WikiCountries: Your Guide to the World/i;
    await waitFor(() =>
      expect(screen.getByText(headlineText)).toBeInTheDocument()
    );
  });

  test("makes a request to Countries API using either axios or fetch", async () => {
    const API_URL = "https://ih-countries-api.herokuapp.com/countries";
    const spyFetch = vi.spyOn(global, "fetch");
    const spyAxios = vi.spyOn(axios, "get");

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const networkRequestMade =
      spyFetch.mock.calls.length > 2 || spyAxios.mock.calls.length > 0;
    expect(networkRequestMade).toBeTruthy();

    if (spyFetch.mock.calls.length > 0) {
      await waitFor(() => {
        expect(spyFetch).toHaveBeenCalledWith(API_URL);
      });
    }
    if (spyAxios.mock.calls.length > 0) {
      await waitFor(() => {
        expect(spyAxios).toHaveBeenCalledWith(API_URL);
      });
    }
  });

  test("renders the list of countries as links using the mocked values", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    for (const country of countriesMock) {
      const countryNameRegex = new RegExp(country.name.common, "i");
      const countryLink = await waitFor(() =>
        screen.getByText(countryNameRegex).closest("a")
      );
      expect(countryLink).toBeInTheDocument();
      expect(countryLink.getAttribute("href")).toBe(`/${country.alpha3Code}`);
    }
  });
});
