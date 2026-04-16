import type { AxiosPromise } from "axios";
import api from "./api";

export interface PostProps{
  id: number;
  title: string;
  content: string;
  abstract: string;
  slug: string;
  imageUrl: string;
  createdAt: Date;
  published: boolean;
}

interface FetchPostsResponse{
  content: PostProps[];
  totalElements: number;
}
export const fetchPosts =async ():AxiosPromise<FetchPostsResponse> => {
  const data =await api.get('/posts');
  return data.data;
}


