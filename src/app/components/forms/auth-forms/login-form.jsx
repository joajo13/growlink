"use client";

import { useForm, Controller } from "react-hook-form";
import { usePostLogin } from "../../../../hooks/auth/usePostLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUserStore } from "../../../../stores/userStore";
import { AuthFormField } from "./auth-form-field";

export const LoginForm = ({ setForLogin }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleLogin } = useUserStore();

  const router = useRouter();

  const { mutate, error, isError, isPending, isSuccess } = usePostLogin();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        const token = response.data.data.token;
        const user = response.data.data.user;
        handleLogin(token, user);
        toast.success("Login successful");
        router.push("/home");
      },
      onError: (error) => {
        toast.error("Invalid credentials");
      },
    });
  };

  const fields = [
    {
      name: "usernameOrEmail",
      placeholder: "Username or email",
      type: "text",
      classNameContainer: "relative flex w-full mt-6 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors['usernameOrEmail'] ? "border-red-500" : "border-app-green"
      }`,
      rules: { required: "This field is required" },
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      classNameContainer: "relative flex w-full mt-2 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors['password'] ? "border-red-500" : "border-app-green"
      }`,
      rules: { required: "This field is required" },
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-app-green">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-8">
        
        {fields.map((field) => (
          <AuthFormField
            key={field.name}
            name={field.name}
            control={control}
            placeholder={field.placeholder}
            type={field.type}
            errors={errors}
            classNameContainer={field.classNameContainer}
            classNameInput={field.classNameInput}
            rules={field.rules}
          />
        ))}

        <button
          type="submit"
          className="h-12 mt-2 bg-app-green text-white font-bold rounded-lg hover:bg-app-dark-green transition duration-300 ease-in-out self-end px-4"
        >
          Login
        </button>
      </form>

      <div className="flex justify-center items-center mt-4">
        <span className="text-sm text-gray-500">
          Don&apos;t have an account?
        </span>

        <button
          className="text-sm text-app-green ml-1"
          onClick={() => setForLogin(false)}
        >
          Register
        </button>
      </div>
    </>
  );
};
