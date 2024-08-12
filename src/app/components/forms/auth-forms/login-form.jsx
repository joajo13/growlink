"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AuthFormField } from "./auth-form-field";
import { signIn, useSession } from "next-auth/react";
import { handleLoginError, loginFields } from "../../../../utils/authHelpers";

export const LoginForm = ({ setForLogin }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const session = useSession();

  const onSubmit = async (data) => {
    try {
      const response = await signIn("credentials", {
        redirect: false,
        usernameOrEmail: data.usernameOrEmail,
        password: data.password,
      });


      if (response.error) {
        handleLoginError(response);
      } else {
        router.push("/home");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-app-green mb-4">Log in</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-8">
        {loginFields(errors).map((field) => (
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
