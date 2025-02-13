import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/home/signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin", // then we've added the signin route
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <PageNotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App