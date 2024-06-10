"use client";
import Link from "next/link";
import { APP_NAME } from "../constants/appInfo";
import { AuthForm } from "../components/forms/auth-forms/auth-form";
import { Toaster } from "sonner";

export const AuthPage = () => {
  return (
    <section className="w-full min-h-screen max-h-screen md:flex md:flex-row bg-app-green">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Link href="/home" className="text-5xl font-bold text-white mt-8">
          {APP_NAME}
        </Link>
      </div>
      <AuthForm />
      <Toaster />
    </section>
  );
};

export default AuthPage;
