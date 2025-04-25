import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { ToastContainer, toast } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider, Route
} from "react-router-dom";
import ViewBrain from "./pages/ViewBrain";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import PublicRoute from "./pages/PublicRoute";


function App() {
  const appRouter = createBrowserRouter([
    {
      element:<ProtectedRoute/>,
      children:[
        {
          path: "/",
          element: <Dashboard />,
        },
      ]
    },
    {
      element:<PublicRoute/>,
    
      children:[
        {
          path:"/signin",
          element:<SignIn/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        }
        
      ]
    },
    
    {
      path:"/brain/v/:hashString",
      element: <ViewBrain />
    },{
      element:<ErrorPage/>,
      path:"*"
    }
  ]);
 

  return (
    <>
    <RouterProvider router={appRouter}>
    </RouterProvider>
    <ToastContainer/>
    </>
  );
}

export default App;
