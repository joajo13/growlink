import { useMutation } from "@tanstack/react-query"
import { postLogin } from "../../services/auth/postLogin"

export const usePostLogin = () => {
    const { mutate, isError, error, isPending, isSuccess } = useMutation({
        mutationKey: 'login',
        mutationFn: postLogin,
    });

    return { 
        mutate, 
        isError, 
        error, 
        isPending, 
        isSuccess
     };
}