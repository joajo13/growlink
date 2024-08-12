import { toast } from "sonner";

export const handleLoginError = (error) => {
  switch (error.status) {
    case 401:
      toast.error("Invalid credentials. Please try again.");
      break;
    case 500:
      toast.error("An error occurred. Please try again.");
      break;
    default:
      toast.error("An error occurred. Please try again.");
  }
};

export const loginFields = (errors) => [
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
