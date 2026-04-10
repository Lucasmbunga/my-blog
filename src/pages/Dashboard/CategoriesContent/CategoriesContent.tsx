import { type FC } from 'react'
import './CategoriesContent.css'
import Button from '../../../components/Button/Button';
import {  MdDelete, MdOutlineAdd } from 'react-icons/md';
import { GrFormEdit } from 'react-icons/gr';
const CategoriesContent: FC = () => {
  const categories = [
    { name: 'Programação' },
    { name: 'Spring Boot' },
    { name: 'Javascript' },
    { name: 'Programação Orientada a Objetos' },
    { name: 'Java' },
    { name: 'Faculdade' }
  ];
  return (
    <div className='categories-content'>
      <h1>Categorias de Posts</h1>
      <div className='add-category'><Button text='Nova categoria'><MdOutlineAdd className='add-icon'/></Button> </div>
      <ul className="categories-list">
        {!categories ? <p>Nenhuma categoria</p> :
          categories.map(category => (
            <li className="post">
              {category.name}
              <span className='edit'><GrFormEdit/></span>
              <span className='delete'><MdDelete className='delete-icon'/></span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CategoriesContent;
