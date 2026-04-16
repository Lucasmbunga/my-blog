import type { AxiosPromise } from "axios";
import api from "./api";

interface Category {
  id: number;
  name: string;
  description: string;
}

interface FetchCategoriesResponse{
  content: Category[];
  totalElements: number;
}

interface PostCategoryProps {
  name: string;
  description: string;
}

export const fetchCategories = async (): AxiosPromise<FetchCategoriesResponse> => {
  const data = await api.get('/categories');
  return data.data;
}

export const postCategory = async (newCategory: PostCategoryProps): AxiosPromise<PostCategoryProps> => {
    const data = await api.post("/categories", newCategory);
    return data.data;
  }
