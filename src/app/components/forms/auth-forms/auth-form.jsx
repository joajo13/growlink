"use client";
import { useState } from "react";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { AuthFormContainer } from "../auth-form-container";

export const AuthForm = () => {
  const [forLogin, setForLogin] = useState(true);

  return (
    <div className="md:w-1/2 md:flex justify-center items-center py-16 px-10">
      <AuthFormContainer>
        {forLogin ? (
          <LoginForm setForLogin={setForLogin} />
        ) : (
          <RegisterForm setForLogin={setForLogin} />
        )}
      </AuthFormContainer>
    </div>
  );
};
