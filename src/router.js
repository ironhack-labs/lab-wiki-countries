import { createBrowserRouter } from 'react-router-dom';

// Pages
import Root from './pages/Root';
import Home from './pages/Home';
import Countries from './pages/Countries';
import AllCountries from './pages/AllCountries';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'countries',
        element: <Countries />,
        children: [
          {
            path: ':name',
            element: <AllCountries />,
          },
        ],
      },
    ],
  },
]);
