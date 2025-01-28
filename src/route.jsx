import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/Err404";
import Home from "./components/Home";
import MainLayout from "./layout/MainLayout";
import ProductDetails from "./components/ProductDetailsPage";
import Dashboard from "./components/Dashboard";
import Statistics from "./components/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        // loader: () => fetch(`${process.env.REACT_APP_URL}/shortServices`),
        element: <Home></Home>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
