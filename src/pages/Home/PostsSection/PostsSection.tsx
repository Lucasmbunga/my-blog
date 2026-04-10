import type { FC } from "react";
import PostCard from "../../../components/PostCard/PostCard";
import './PostsSection.css'
import posts from "../../../data/posts";


const PostsSection: FC = () => {
  return (
    <>
      <section className="posts-section">

        <h2>Últimos artigos</h2>
        <div className="tags">
          <p className="active">Todos</p>
          <p>Javascript</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>React</p>
          <p>Java</p>
        </div>
        <div className="container-posts">
          {posts.map((post, index) => (
            <PostCard {...post} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
export default PostsSection;