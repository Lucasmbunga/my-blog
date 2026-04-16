import type { FC } from "react";
import PostCard from "../PostCard/PostCard";
import ContainerCards from "../ContainerCards/ContainerCards";
import './PostList.css'
import usePosts from "../../hooks/usePosts/usePosts";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import EmptyMessage from "../EmptyMessage/EmptyMessage";

interface PostListProps{
  title?: string;
}
const PostList: FC<PostListProps> = ({ title }: PostListProps) => {
  const { data: posts, isLoading, error } = usePosts();
  
  if (isLoading) {
    return <Loading/>
  }
  else if (error) {
    return <ErrorMessage error={error}/>
  }
  
  return (
    <>
      <div className="post-list-container">
        <h2>{title}</h2>
        <ContainerCards>
          {posts?.content.length === 0 ? <EmptyMessage message="Nenhum post" /> :
            
            posts?.content.map((post, index) => (
            <PostCard {...post} key={index} />
          ))}
        </ContainerCards>
      </div>
    </>
  );
}
export default PostList;