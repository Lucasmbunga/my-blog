import { useMutation, useQueryClient } from "@tanstack/react-query"
import registerUser from "../../services/registerService"

const useRegisterMutation = () => {

  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['users']})
    }
    
  })
  return mutate;
}

export default useRegisterMutation;