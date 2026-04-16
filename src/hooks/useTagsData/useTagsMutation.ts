import type { AxiosPromise } from "axios";
import api from "../../services/api"
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface TagProps{
  name: string;
}
const useTagsMutation = () => {
  
  const setTagData =async (newTag:TagProps):AxiosPromise<TagProps> => {
    const response = await api.post('/tags',newTag);
    return response.data;
  }

  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: setTagData,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["tags"]})
    }
  })

  return mutate;
}

export default useTagsMutation;
