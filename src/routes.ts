import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./components/Home/Home";
import Swap from "./components/Swap/Swap";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: 'swap', Component: Swap },
        ]
    },
]);