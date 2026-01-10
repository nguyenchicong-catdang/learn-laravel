// vite/main.jsx
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./login/Login";
import { authMiddleware } from "./middlewares/authMiddleware";
import { ErrorBoundary } from "./pages/ErrorBoundary";
import { loginAction } from "./login/actions/loginAction";
import App from "./pages/App";
// routes for resources
import { routesPost } from "./posts/routesPost";

const routesResources = [
  routesPost,
]

export const router = createBrowserRouter([
    {
        path: "/",
        middleware: [authMiddleware],
        errorElement: <ErrorBoundary />,
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            ...routesResources,
        ],
    },
    {
        path: "/login",
        action: loginAction,
        errorElement: <ErrorBoundary />,
        Component: Login,
    },
]);