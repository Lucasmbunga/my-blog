import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../../services/postService"

const usePosts = () => {
  const query = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry:2
  })

  return {...query, data:query.data?.data}
}
export default usePosts;