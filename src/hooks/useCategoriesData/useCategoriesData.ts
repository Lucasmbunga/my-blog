import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/categoryService";

const useCategoriesData = () => {

  const query = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    retry: 2
  })

  return { ...query, data: query.data?.data }
}

export default useCategoriesData;