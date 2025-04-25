import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const PublicRoute = () => {
  const { isPending, isSuccess } = useQuery({
    queryKey: ["userCheck"],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/user/auth/verify`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  // While loading, wait
  if (isPending) {
    return (
      <div className="text-center  bg-gray-400/30 min-h-screen ">
        <div className=" absolute left-[50%] rounded-full w-6 h-6 border-2 border-purple-800 border-t-transparent animate-spin top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-4 items-center"></div>
      </div>
    );
  }

  // If logged in → redirect to dashboard
  if (isSuccess) {
    return <Navigate to="/" replace />;
  }

  // If not logged in → allow access
  return <Outlet />;
};

export default PublicRoute;
