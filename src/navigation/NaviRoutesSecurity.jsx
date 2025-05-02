import { createBrowserRouter } from "react-router-dom";
import Home from "../security/home/pages/Home";
import Users from "../security/users/pages/Users";

import Error from "../share/errors/pages/Error";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: "/Users",
          element: <Users />,
        }
      ], 
    },
  ]);
  export default router;