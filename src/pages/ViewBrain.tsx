import React from "react";
import { Button } from "../components/ui/Button";
import LogoIcon from "../icons/logo.icons";
import { Content } from "./Dashboard";
import Card from "../components/ui/Card";
import { Params, useNavigate, useParams } from "react-router-dom";
import useBrain from "../hooks/useBrain";
import { toast } from "react-toastify";
import LogoutIcon from "../icons/logout.icons";
import { useMutation } from "@tanstack/react-query";
import { BACKEND_URL } from "../config";
import axios, { AxiosError, AxiosResponse } from "axios";

const ViewBrain = () => {
  const {hashString}= useParams() 
  const navigate = useNavigate()
  
 
  const fetchedBrain = useBrain(hashString||"");
  if (fetchedBrain.isError) {
    toast("Error fetching brain" + fetchedBrain.error);
    return;
  }
  const { data, isPending, mutate } = useMutation({
    mutationKey: ["signOut"],
    mutationFn: async () => {
      const res = await axios.post(`${BACKEND_URL}/user/signout`);
      return res.data;
    },
    onError: (error: AxiosError) => {
      //@ts-ignore
      toast(error?.response?.data?.message);
    },
    onSuccess: (data: AxiosResponse) => {
      //@ts-ignore
      toast(data?.message);
      navigate("/signin");
    },
  });

  const signOutUser = async()=>{
    mutate();
  }
  return (
    <div className=" bg-pink-400/15 min-h-screen">
      <div className="flex text-purple-800 justify-between p-8 font-bold text-lg items-center border-b-2 border-gray-400">
        <h2>{fetchedBrain?.data?.data?.username}'s Brain</h2>
        <div className="flex gap-2 items-center">
          <Button onClick={()=>{
            navigate('/')
          }} variant="secondary" text="Dashboard" size="sm" />
          {/* <LogoutIcon onClick={signOutUser} /> */}
        </div>
      </div>
      {fetchedBrain.isFetching ? (
        <div className="flex justify-center items-center  min-h-screen">
            <div className="w-8 h-8 border-2 rounded-full border-purple-700 border-t-transparent animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3 p-10">
          {fetchedBrain.data?.data?.contents?.map((con: Content) => {
            return (
              <Card
                key={con?.id}
                link={con?.link}
                title={con?.title}
                type={con?.type}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ViewBrain;
