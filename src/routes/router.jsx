
import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../components/Dashboard";
import CreateTask from "../components/CreateTask/CreateTask";
import PrivateRoute from "./privateRoute";
import ManageTask from "../components/ManageTask/ManageTask";
import UpdateTask from "../components/UpdateTask/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
        path:'/',
        element:<Home></Home>,
    }

]
  },
  {
    path:'/login-route',
    element:<Login></Login>
  },
  {
    path:"registration-route",
    element:<Registration></Registration>
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
      path:'create-task',
      element:<PrivateRoute><CreateTask></CreateTask></PrivateRoute>
    },
    {
      path:'manageList',
      element:<ManageTask></ManageTask>,
      
    },
    {
      path:'update/:id',
      element:<UpdateTask></UpdateTask>,
      loader:({params})=>fetch(`http://localhost:5000/allTodo/new/${params.id}`)
    }
  ]
  }
]);
export default router;