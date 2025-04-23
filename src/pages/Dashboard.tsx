import { useState } from "react";
import SideBar from "../components/ui/SideBar";
import AddContentModal from "../components/ui/AddContentModal";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/plus.icons";
import { ShareIcon } from "../icons/share.icons";
import Card from "../components/ui/Card";


const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <SideBar />
      <AddContentModal
        open={modalOpen}
        closeCall={() => {
          setModalOpen(false);
        }}
      />
      <div className="bg-slate-500/20 ml-[15%] ">
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
            onClick={() => {}}
            startIcon={<ShareIcon size="sm" />}
          />
        </div>
        <div className=" grid  grid-cols-2 md:grid-cols-3 p-4">
          <Card
            type="tweet"
            link="https://twitter.com/1kunalbahl/status/1914915129407283406"
            title="Beautiful Kashmir"
          />

          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=nv81TXkelTk"
            title="Leaks"
          />
          <Card
            type="tweet"
            link="https://twitter.com/sneha8sivakumar/status/1914758273003147310"
            title="Beautiful Kashmir"
          />

          <Card
            link="https://twitter.com/ChShersh/status/1914647081093902704"
            title="Awkward Question"
            type="tweet"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
