import { useState } from "react";
import SideBar from "../components/ui/SideBar";
import AddContentModal, {
  ContentTypes,
} from "../components/ui/AddContentModal";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/plus.icons";
import { ShareIcon } from "../icons/share.icons";
import Card from "../components/ui/Card";
import ProfileIcon from "../icons/profile.icons";
import LogoutIcon from "../icons/logout.icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { BACKEND_URL, FRONTEND_URL } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useContent from "../hooks/useContent";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import useAuthPoll from "../hooks/useAuthPoll";

export interface Content {
  id: number;
  link: string;
  type: ContentTypes;
  title: string;
  userId: number;
  user: any;
  tags: [];
}

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useAuthPoll();
  const navigate = useNavigate();
  const content = useContent();

  const dispatch = useDispatch();

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
    onSuccess: (data) => {
      dispatch(removeUser());
      toast(data?.message);

      navigate("/signin");
    },
  });

  const brainShare = useMutation({
    mutationKey: ["brainShare"],
    mutationFn: async () => {
      const res = await axios.post(`${BACKEND_URL}/brain/share`, {
        share: true,
      });
      return res.data;
    },
    onSuccess: (data: AxiosResponse) => {
      //@ts-ignore

      const shareUrl = `${FRONTEND_URL}/brain/v/${data?.data?.hashString}`;
      navigator.clipboard.writeText(shareUrl);
      toast(`Share Url Copied!`);
    },
    onError: (e: AxiosError) => {
      //@ts-ignore
      toast(e?.response?.data?.message);
    },
  });

  const signOutUser = () => {
    mutate();
  };

  const shareMyBrain = () => {
    brainShare.mutate();
  };

  return (
    <>
      <SideBar />
      <AddContentModal
        open={modalOpen}
        closeCall={() => {
          setModalOpen(false);
        }}
        refetchCall={() => {
          content.refetch();
        }}
      />
      <div className="bg-pink-400/15 ml-[15%] min-h-screen">
        <div className="p-4 flex justify-end gap-2 items-center ">
          <Button
            variant="primary"
            size="sm"
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon size="sm" />}
          />
          <Button
            variant="secondary"
            size="sm"
            text="Share Brain"
            onClick={shareMyBrain}
            startIcon={<ShareIcon size="sm" />}
          />
          <LogoutIcon onClick={signOutUser} />
        </div>
        {content.isPending ? (
          <div className="h-screen flex justify-center items-center">
            <div className="w-8 h-8 border-2 border-purple-500 animate-spin border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className=" flex flex-wrap gap-8 p-4">
            {content.data?.data.map((con: Content) => {
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
    </>
  );
};

export default Dashboard;
