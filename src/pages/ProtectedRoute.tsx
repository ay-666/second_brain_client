import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeUser } from "../redux/userSlice";

const ProtectedRoute = () => {




    const {user} = useSelector((store:RootState) => store.user)

  
    

    
    return user ? <Outlet /> : <Navigate to='/signin' />
};
export default ProtectedRoute;
