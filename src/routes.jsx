import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Suspense, lazy } from "react";

// Dynamic routes
const Home = lazy(() => import("./pages/Home.jsx"));
const Checkout = lazy(() => import("./pages/Checkout.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={"Loading..."}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
