import { createBrowserRouter } from "react-router-dom";

// Paginas
import Root from "./pages/Root"
import Home from "./pages/Home"
import CountryList from "./pages/CountryList"
import CountryCard from "./pages/CountryCard";



export default createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "countrylist",
				element: <CountryList />,
				children: [
					{
						path: "countrydetails/:name",
						element: <CountryCard />
					}
				]
			}
		]
	}
])