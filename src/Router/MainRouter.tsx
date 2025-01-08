import { createBrowserRouter } from "react-router-dom";
import DashboardLayoutBasic from "../pages/DashboardLayoutBasic";
import AllPage1 from "../pages/AllPage1";
import AllPage2 from "../pages/AllPage2";

const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayoutBasic />,
      children: [
        {
          path: "/",
          element: <AllPage1 />,
        },
        {
          path: "/dashboard",
          element: <AllPage2 />,
        },
      ],
    },
  ]);
  
  export default mainRouter;
  