import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import SavedCars from "./SavedCars";
import FAQs from "./FAQs";
import Resources from "./Resources";
import CarCompare from "./CarCompare";

const router = createBrowserRouter([
{
    path: "/",
    element: <Home />,
},
{
    path: "/SavedCars",
    element: <SavedCars />,
},
{
    path: "/FAQs",
    element: <FAQs />,
},
{
    path: "/Resources",
    element: <Resources />,
},
{
    path: "/CarCompare",
    element: <CarCompare  />,
}
])

export default router;