import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import Layout from './Layout.jsx';
import PageNotFound from './pages/errors/PageNotFound.jsx';
import AllApps from './pages/AllApps/AllApps.jsx';
import AppDetails from './pages/AppDetails/AppDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        loader:()=> fetch('/apps.json'),
        index: true,
        Component: Home
      },
      {
        path: "/allApps",
        loader:()=> fetch('/apps.json'),
        Component: AllApps
      },
      {
        path: "/appDetails/:id",
        loader:()=> fetch('/apps.json'),
        Component: AppDetails
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
