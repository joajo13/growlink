import { useQuery } from "@tanstack/react-query";
import { getAll } from '../../services/posts/getAll';
import { useSession } from "next-auth/react";

export const useGetAllPosts = () => {
    const { data: session } = useSession();
    const token = session?.user?.token;

    const { isLoading, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => getAll(token),
        enabled: !!token
    })

    const posts = data?.data?.data || [];

    return { isLoading, error, data: posts };
}