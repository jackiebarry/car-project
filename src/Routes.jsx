import { createBrowserRouter } from "react-router-dom";

import Home from "./Home.jsx";
import SavedCars from "./SavedCars.jsx";
import FAQs from "./FAQs.jsx";
import Resources from "./Resources.jsx";
import CarCompare from "./CarCompare.jsx";

const router = createBrowserRouter(
  {
    basename: "/car-project",
  },
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
  ]
);

export default router;

// import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Home.jsx";
// import SavedCars from "./SavedCars.jsx";
// import FAQs from "./FAQs.jsx";
// import Resources from "./Resources.jsx";
// import CarCompare from "./CarCompare.jsx";

// const AppRouter = () => (
//   <HashRouter basename="/car-project">
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/SavedCars" element={<SavedCars />} />
//       <Route path="/FAQs" element={<FAQs />} />
//       <Route path="/Resources" element={<Resources />} />
//       <Route path="/CarCompare" element={<CarCompare />} />
//     </Routes>
//   </HashRouter>
// );

// export default AppRouter;
