import { useForm } from "react-hook-form";
import { usePostNewUser } from "../../../../hooks/auth/usePostNewUser";
import { toast } from "sonner";
import {
  validateDay,
  validateMonth,
  validateYear,
} from "../../../../utils/validators";
import { AuthFormField } from "./auth-form-field";

export const RegisterForm = ({ setForLogin }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = usePostNewUser();

  const onSubmit = (data) => {
    const newUser = {
      username: data.username,
      name: data.name,
      email: data.email,
      password: data.password,
      passwordConfirm: data.confirmPassword,
      birthdate: `${data.birthdateYear}-${data.birthdateMonth}-${data.birthdateDay}`,
    };

    toast.loading("Creating account");

    mutate(newUser, {
      onSuccess: () => {
        toast.dismiss();
        toast.success("Your account has been created");
        setForLogin(true);
      },
      onError: (error) => {
        toast.dismiss();
        toast.error(error.response.data.message);
      },
    });
  };

  const fields = [
    {
      name: "username",
      placeholder: "username",
      classNameContainer: "relative w-full flex mt-8 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["username"] ? "border-red-500" : "border-app-green"
      }`,
      type: "text",
      rules: { required: "This field is required" },
    },
    {
      name: "name",
      placeholder: "Name",
      classNameContainer: "relative w-full mt-2 flex pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["name"] ? "border-red-500" : "border-app-green"
      }`,
      type: "text",
      rules: { required: "This field is required" },
    },
    {
      name: "email",
      placeholder: "example@email.com",
      classNameContainer: "relative w-full mt-2 flex pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["email"] ? "border-red-500" : "border-app-green"
      }`,
      type: "email",
      rules: { required: "This field is required" },
    },
    {
      name: "password",
      placeholder: "Password",
      classNameContainer: "relative flex w-full mt-2 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["password"] ? "border-red-500" : "border-app-green"
      }`,
      type: "password",
      rules: {
        required: "This field is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
      },
    },
    {
      name: "confirmPassword",
      placeholder: "Confirm password",
      classNameContainer: "relative flex w-full mt-2 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["confirmPassword"] ? "border-red-500" : "border-app-green"
      }`,
      type: "password",
      rules: {
        required: "This field is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters",
        },
      },
    },
  ];

  const birthdateFields = [
    {
      name: "birthdateDay",
      placeholder: "Day",
      classNameContainer: "relative flex w-1/3 mt-2 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["birthdateDay"] ? "border-red-500" : "border-app-green"
      }`,
      type: "number",
      rules: { required: "This field is required", validate: validateDay },
    },
    {
      name: "birthdateMonth",
      placeholder: "Month",
      classNameContainer: "relative flex w-1/3 mt-2 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["birthdateMonth"] ? "border-red-500" : "border-app-green"
      }`,
      type: "number",
      rules: { required: "This field is required", validate: validateMonth },
    },
    {
      name: "birthdateYear",
      placeholder: "Year",
      classNameContainer: "relative flex w-1/3 mt-2 pb-6",
      classNameInput: `w-full h-12 p-2 focus-within:outline rounded-lg border-2 ${
        errors["birthdateYear"] ? "border-red-500" : "border-app-green"
      }`,
      type: "number",
      rules: { required: "This field is required", validate: validateYear },
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-app-green">
        Register
      </h2>

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

        <div className="flex gap-2">
          {birthdateFields.map((field) => (
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
        </div>

        <button
          type="submit"
          className="h-12 mt-2 bg-app-green text-white font-bold rounded-lg hover:bg-app-dark-green transition duration-300 ease-in-out self-end px-4"
        >
          Register
        </button>
      </form>

      <div className="flex justify-center items-center mt-4">
        <span className="text-sm text-gray-500">
          You already have an account?
        </span>
        <button
          className="text-sm text-app-green ml-1"
          onClick={() => setForLogin(true)}
        >
          Login
        </button>
      </div>
    </>
  );
};
