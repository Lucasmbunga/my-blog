import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUser } from "../../services/userService";

const useUsersMutation = () => {

  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postUser,
    onSuccess:()=>{queryClient.invalidateQueries({queryKey:['users']})}
    
  })
  return mutate;
  
}

export default useUsersMutation;
