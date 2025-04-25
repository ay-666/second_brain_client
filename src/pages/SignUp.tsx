import Input from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useRef } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { data, error, isPending, isSuccess, mutate } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (payload: { username: string; password: string }) => {
      const res = await axios.post(`${BACKEND_URL}/user/signup`, {
        username: payload.username,
        password: payload.password,
      });

      return res.data;
    },
    onSuccess: (data) => {
      console.log(data?.message);
      toast(data?.message);
    },
    onError: (error: AxiosError) => {
      //@ts-ignore
      console.log(error?.response?.data?.message ?? "");
      //@ts-ignore
      toast(error?.response?.data?.message);
    },
  });

  const signUpUser = async () => {
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
          <h2>SignUp</h2>
        </div>
        <Input ref={usernameRef} placeholder="Username"></Input>
        <Input ref={passwordRef} placeholder="Password"></Input>
        <div>
          <div className="flex justify-center">
            <Button
              isFullWidth={true}
              variant="primary"
              size="md"
              text="Sign Up"
              onClick={signUpUser}
              isLoading={isPending}
            />
          </div>
          <div className="text-sm pt-2">
            Already a Member?{" "}
            <span
              onClick={() => {
                navigate("/signin");
              }}
              className="text-purple-600 font-semibold"
            >
              SignIn here.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
