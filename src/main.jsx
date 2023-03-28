import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ItemRoot from './routes/itemRoot'
import Cart from './routes/cart'
import './index.css'
import { GlobalProvider } from '../src/context'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id", // www.coderhouse.com/category/54343434
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
)
