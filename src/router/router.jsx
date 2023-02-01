import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";

// other pages

const HomePage = React.lazy(() => import("../pages/HomePage.jsx"));
const FavoritePage = React.lazy(() => import("../pages/FavoritePage.jsx"));
const OrdersPage = React.lazy(() => import("../pages/OrdersPage.jsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                index: true
            },
            {
                path: "/favorites",
                element: <FavoritePage />
            },
            {
                path: "/orders",
                element: <OrdersPage />
            },
        ]
    }
]);

export default router;