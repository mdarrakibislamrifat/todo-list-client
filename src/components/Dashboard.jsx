import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaList,
  
} from "react-icons/fa";

import { MdAddRoad } from "react-icons/md";

const Dashboard = () => {
  

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
      
      <div className="lg:min-h-screen w-full lg:w-1/5 shadow-lg rounded-lg text-white  bg-gradient-to-r from-indigo-500 to-purple-500">
        <ul className="menu p-4">
          <>
           <li>
                  <NavLink to="/dashboard/manageList">
                    <FaList className="text-xl"></FaList>Manage List
                  </NavLink>
                </li>
           <li>
                  <NavLink to="/dashboard/create-task">
                    <MdAddRoad className="text-xl"></MdAddRoad>Create Task
                  </NavLink>
                </li>
         
          </>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              {" "}
              <FaHome className="text-xl"></FaHome>Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;