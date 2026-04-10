import type { FC } from "react";
import type { PostProps } from "../../interface/PostProps";
import { Link } from "react-router-dom";
import './PostCard.css'

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

