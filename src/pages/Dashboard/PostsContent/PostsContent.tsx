import  { type FC } from 'react'
import './PostsContent.css'
import PostList from '../../../components/PostList/PostList';

const PostsContent:FC = () => {
  return (
    <div className='posts-content-container'>
      <h1>Todos os posts</h1>
      <div className="top-bar">
        <select name="" id="" value={"Filtrar por"}>
          <option value="">Filtrar por</option>
        </select>
        <select name="" id="" value={"Filtrar por"}>
          <option value="">Filtrar por</option>
        </select>
        <select name="" id="" value={"Filtrar por"}>
          <option value="">Filtrar por</option>
        </select>
      </div>
      <PostList/>
    </div>
  )
}

export default PostsContent;
