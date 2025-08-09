import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contract from './components/Contract/Contract';
import CountryDetail from './components/CountryDetail/CountryDetail';
import OurJourney from './components/OurJourney/OurJourney';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'service',
        element: <Service></Service>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'ourJourney',
        element: <OurJourney></OurJourney>
      }
      ,
      {
        path: 'desh/:deshId',
        element: <CountryDetail></CountryDetail>,
        loader: () => fetch('/valuable_countries.json')
        
      }
      ,
      {
        path: 'contract',
        element:<Contract></Contract>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
