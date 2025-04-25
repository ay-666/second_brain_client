import Input from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useRef } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { data, mutate, isPending } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: async (inputs: { username: string; password: string }) => {
      const res = await axios.post(`${BACKEND_URL}/user/login`, inputs);
      return res.data;
    },

    onError: (error: AxiosError) => {
      //@ts-ignore
      toast(error?.response?.data?.message);
    },
    onSuccess: (data: AxiosResponse) => {
      console.log(data);
      //@ts-ignore
      toast(data?.message);
      navigate("/");
    },
  });

  const signInUser = () => {
    const username = usernameRef?.current?.value ?? "";
    const password = passwordRef?.current?.value ?? "";

    if (!username || !password) {
      toast("Username/Password can't be empty.");
      return;
    }

    mutate({ username, password });
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white min-w-48 p-6 flex flex-col gap-8 rounded-lg shadow-md outline-1 outline-gray-400/30">
        <div className="text-lg font-semibold flex justify-start">
          <h2>SignIn</h2>
        </div>
        <Input ref={usernameRef} placeholder="Username"></Input>
        <Input ref={passwordRef} placeholder="Password"></Input>

        <div>
          <div className="flex justify-center">
            <Button
              isFullWidth={true}
              variant="primary"
              isLoading={isPending}
              size="md"
              text="Sign In"
              onClick={signInUser}
            />
          </div>
          <div className="text-sm pt-2">
            Not a Member?{" "}
            <span onClick={()=>{
              navigate('/signup')
            }} className="text-purple-600 font-semibold">
              Register here.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
