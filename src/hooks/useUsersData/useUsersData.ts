import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/userService";


const useUsers = () => {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    retry:2
  })

  return {...query,data:query.data?.data};
}

export default useUsers;