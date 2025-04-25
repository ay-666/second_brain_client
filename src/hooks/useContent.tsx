import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { BACKEND_URL } from '../config';

    const useContent = () => {

        const {data,isPending,isError,error,refetch} = useQuery({
            queryKey:['getContent'],
            queryFn:async ()=>{
                const res = await axios.get(`${BACKEND_URL}/content/`);
                return res.data;
            },
            
        })
    return { data, isPending, error, isError,refetch};
    }

    export default useContent;