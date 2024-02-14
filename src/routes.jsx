import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Suspense, lazy } from "react";

import ErrorPage from "./pages/ErrorPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Dynamic routes
const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Signup = lazy(() => import("./pages/Signup.jsx"));
const Checkout = lazy(() => import("./pages/Checkout.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={"Loading..."}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={"Loading..."}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Suspense fallback={"Loading..."}>
              <Home />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Suspense fallback={"Loading..."}>
              <Checkout />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
