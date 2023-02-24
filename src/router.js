import { createBrowserRouter } from "react-router-dom";

// Paginas
import Root from "./pages/Root"
import CountryList from "./pages/CountryList"
import CountryCard from "./pages/CountryCard";



export default createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
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