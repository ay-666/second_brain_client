import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
     {/* <Dashboard /> */}
     {/* <SignUp /> */}
     <SignIn />
    </>
  );
}

export default App;
