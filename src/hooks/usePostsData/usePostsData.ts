import type { AxiosPromise } from "axios";
import api from "../../services/api";
import { useQuery } from "@tanstack/react-query";
interface PostProps{
  id: number;
  title: string;
  content: string;
  slug: string;
  imageUrl: string;
  published: boolean;
  createdAt: Date;

}

interface ResponsePostsProps{
  content: PostProps[];
  totalElements: number;
}
const fetchPosts = async ():AxiosPromise <ResponsePostsProps>=> {
  const data = await api.get('/posts');
  return data.data
}

const usePostsData = () => {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry:2
  })

  return {...query,data:query.data?.data}
}
export default usePostsData;