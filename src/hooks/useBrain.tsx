import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Params } from "react-router-dom";

function useBrain(hashString:string){
    const {data,isFetching, isPending, isError , error ,refetch} = useQuery({
        queryKey:['getBrain'],
        queryFn: async () =>{
            const res = await axios.get(`${BACKEND_URL}/brain/${hashString}`);
            
            return res.data;
        }
    })

    return {data,isFetching, isPending, isError , error ,refetch};
}
export default useBrain;