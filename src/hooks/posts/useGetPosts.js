import { useQuery } from "@tanstack/react-query";
import { getAll } from '../../services/posts/getAll';

export const useGetAllPosts = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: getAll,
    })

    const posts = data?.data?.data || [];

    return { isLoading, error, data: posts };
}