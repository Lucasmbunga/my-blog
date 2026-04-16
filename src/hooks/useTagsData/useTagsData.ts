import { useQuery } from "@tanstack/react-query";
import api from "../../services/api"
import type { AxiosPromise } from "axios";

interface Tag{
  id: number;
  name: string;
}

interface TagsPropsResponse{
  content: Tag[];
  totalElements: number;
}
const fechTags = async (): AxiosPromise<TagsPropsResponse> => {
  const data = await api.get("/tags");
  return data.data;
}

const useTagsDta = () => {
  
  const query = useQuery({
    queryKey: ['tags'],
    queryFn: fechTags,
    retry:2
  })

  return {...query, data:query.data?.data}
}

export default useTagsDta;