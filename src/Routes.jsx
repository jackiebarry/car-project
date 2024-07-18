import { createBrowserRouter } from "react-router-dom";

import Home from "./Home.jsx";
import SavedCars from "./SavedCars.jsx";
import FAQs from "./FAQs.jsx";
import Resources from "./Resources.jsx";
import CarCompare from "./CarCompare.jsx";

const router = createBrowserRouter(
  [
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
      element: <CarCompare />,
    },
  ],
  {
    basename: "/car-project",
  }
);

export default router;
