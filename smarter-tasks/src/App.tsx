
import HomePage from './pages/HomePage'
import TaskListPage from './pages/TaskListPage';
import Layout from "./components/Layout";
import TaskDetailsPage from './pages/TaskDetailsPage';
import Signin from './pages/Signin';
import ProtectedRoute from './ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path: "/tasks/:id",
        element: <TaskDetailsPage />
      },
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
// function App() {
//   return (
//     <div className="App">
//       <TaskApp />
//     </div>
//   );
// }

export default App