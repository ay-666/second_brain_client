import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../config";

const ProtectedRoute = () => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ["userCheck"],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/user/auth/verify`);

      return res.data;
    },
  });
 

  // If success → allow access
  if (isSuccess) {
    return <Outlet />;
  }

  // If error (e.g. not logged in) → redirect
  return <Navigate to="/signin" replace />;
};
export default ProtectedRoute;
