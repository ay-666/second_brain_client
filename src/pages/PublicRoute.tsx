import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PublicRoute = () => {

    const {user} = useSelector((store:RootState) => store.user);

    return user ? <Navigate to="/" /> : <Outlet/> 
};

export default PublicRoute;
