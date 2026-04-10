import type { FC } from "react";
import posts from "../../data/posts";
import PostCard from "../PostCard/PostCard";
import ContainerCards from "../ContainerCards/ContainerCards";
import './PostList.css'

const PostList: FC = () => {
  posts.map(post => post.abstract = "")
  return (
    <>
      <div className="post-list-container">
        <h2>Todos os Artigos</h2>
        <ContainerCards>
          {posts.map((post, index) => (
            <PostCard {...post} key={index} />
          ))}
        </ContainerCards>
      </div>
    </>
  );
}
export default PostList;