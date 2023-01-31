import { createBrowserRouter } from "react-router-dom";

// Pages
import { Home } from "../pages/Home"
import { TasksList } from '../pages/Tasks';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/tasks",
        element: <TasksList />
    }
])

export default router;