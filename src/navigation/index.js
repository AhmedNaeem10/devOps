import { createBrowserRouter } from "react-router-dom";
import { Home, Project, Education } from "../pages";
import Certification from "../pages/Certification";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Project />,
    },
    {
        path: "/education",
        element: <Education />,
    },
    {
        path: "/certifications",
        element: <Certification />,
    },
]);