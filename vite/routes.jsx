// vite/main.jsx
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./login/Login";
import { authMiddleware } from "./middlewares/authMiddleware";
import { ErrorBoundary } from "./pages/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    middleware: [authMiddleware],
    errorElement: <ErrorBoundary />,
    Component: Home
  },
  {
    path: '/login',
    Component: Login
  }
]);