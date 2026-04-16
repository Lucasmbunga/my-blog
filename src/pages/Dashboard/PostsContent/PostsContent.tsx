import { type FC } from 'react'
import './PostsContent.css'
import PostList from '../../../components/PostList/PostList';
import Button from '../../../components/Button/Button';
import { MdOutlineAdd } from 'react-icons/md';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const PostsContent: FC = () => {
  return (
    <div className='posts-content-container'>
      <DashboardHeader title='Todos os posts' />
      <div className="top-bar">
        <div>
          <select name="" id="" value={"Filtrar por"}>
            <option value="">Filtrar por</option>
          </select>
          <select name="" id="" value={"Filtrar por"}>
            <option value="">Filtrar por</option>
          </select>
          <select name="" id="" value={"Filtrar por"}>
            <option value="">Categoria</option>
          </select>
        </div>
        <Button text='Novo post' children={<MdOutlineAdd className='add-icon' />} />
      </div>
      <PostList />
    </div>
  )
}

export default PostsContent;
