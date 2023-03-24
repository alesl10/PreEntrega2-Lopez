import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ItemRoot from './routes/itemRoot'
import './index.css'
import { GlobalProvider } from '../src/context'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
     <RouterProvider router={router} />
     </GlobalProvider>
  </React.StrictMode>,
)
