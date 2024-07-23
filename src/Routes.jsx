// import { createBrowserRouter } from "react-router-dom";

// import Home from "./Home.jsx";
// import SavedCars from "./SavedCars.jsx";
// import FAQs from "./FAQs.jsx";
// import Resources from "./Resources.jsx";
// import CarCompare from "./CarCompare.jsx";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/car-project/",
//       element: <Home />,
//     },

//     {
//       path: "/SavedCars",
//       element: <SavedCars />,
//     },

//     {
//       path: "/FAQs",
//       element: <FAQs />,
//     },
//     {
//       path: "/Resources",
//       element: <Resources />,
//     },
//     {
//       path: "/CarCompare",
//       element: <CarCompare />,
//     },
//   ],
//   {
//     basename: "/car-project",
//   }
// );

// export default router;

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import SavedCars from "./SavedCars.jsx";
import FAQs from "./FAQs.jsx";
import Resources from "./Resources.jsx";
import CarCompare from "./CarCompare.jsx";

const AppRouter = () => (
  <Router basename="/car-project">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SavedCars" element={<SavedCars />} />
      <Route path="/FAQs" element={<FAQs />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="/CarCompare" element={<CarCompare />} />
    </Routes>
  </Router>
);

export default AppRouter;

