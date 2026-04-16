import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCategory } from "../../services/categoryService";


const useCategoriesMutation = () => {

  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postCategory,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['categories'] }),
    retry:0

  })

  return mutate;

}

export default useCategoriesMutation
