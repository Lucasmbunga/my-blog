import type { FC } from "react";
import { Link } from "react-router-dom";
import './PostCard.css'
import {type PostProps } from '../../services/postService';

const PostCard: FC<PostProps> = ({ title, slug, abstract, imageUrl }: PostProps) => {
  return (
    <div className="container-post">
      <Link to={"/posts/" + slug} >
        <img src={imageUrl} alt="" />
        <h3>{title}</h3>
        <p>{abstract}</p>
      </Link>
    </div>

  );
}
export default PostCard;

