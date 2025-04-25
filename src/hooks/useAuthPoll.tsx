import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BACKEND_URL } from "../config";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { removeUser } from "../redux/userSlice";


const useAuthPoll = () =>{
    const dispatch = useDispatch();
    const user = useSelector((store:RootState)=> store.user);


    const {data,isError,error} = useQuery({
        queryKey:['authCheck'],
        queryFn: async()=>{
            const res = await axios.get(`${BACKEND_URL}/user/auth/verify`);
            return res.data;
        },
        refetchInterval: 15000,
        retry:false,
        enabled:!!user
        
    })
    useEffect(() => {
        if (isError) {
          dispatch(removeUser());
        }
      }, [isError, error]);
}
export default useAuthPoll;