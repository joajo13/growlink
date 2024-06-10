import { useMutation } from "@tanstack/react-query"
import { postNewUser } from "../../services/auth/postNewUser"

export const usePostNewUser = () => {
  const { mutate, isError, error, isPending, isSuccess } = useMutation({
    mutationKey: 'register',
    mutationFn: postNewUser,
  });

  return { 
    mutate, 
    isError, 
    error, 
    isPending, 
    isSuccess
  };
}