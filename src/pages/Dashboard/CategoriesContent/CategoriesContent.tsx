import { useEffect, useState, type FC } from 'react'
import './CategoriesContent.css'
import Button from '../../../components/Button/Button';
import { MdDelete, MdOutlineAdd } from 'react-icons/md';
import { GrFormEdit } from 'react-icons/gr';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import useCategoriesData from '../../../hooks/useCategoriesData/useCategoriesData';
import Modal from '../../../components/Modal/Modal';
import useModal from '../../../hooks/useModal/useModal';
import useCategoriesMutation from '../../../hooks/useCategoriesData/useCategoriesMutation';
import SucessModal from '../../../components/SucessModal/SucessModal';
import useSucessModal from '../../../hooks/useSucessModal/useSucessModal';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import EmptyMessage from '../../../components/EmptyMessage/EmptyMessage';
import Input from '../../../components/Input/Input';

const CategoriesContent: FC = () => {

  const { isModalOpen, handlerCloseModal, handlerOpenModal } = useModal();
  const { data: categories, isLoading, error } = useCategoriesData();
  const { data: response, mutate, isSuccess } = useCategoriesMutation();
  const [name, setName] = useState<string>("");
  const [description, setNewDescription] = useState<string>("");
  const { isSucessModalOpen, openSucessModal, closeSucessModal } = useSucessModal();


  const handlerSubmit = () => {

    const newCategory = {
      name, description
    }
    mutate(newCategory)

    console.log(response)
    if (isSuccess) {
      openSucessModal();
      setNewDescription("");
      setName("")
    }

    setTimeout(() => {
      closeSucessModal();
    }, 1500)
  }

  useEffect(() => {
    handlerCloseModal()
  }, [isSuccess]);

  if (isLoading) {
    return <Loading />
  }
  else if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div className='categories-content'>

      <DashboardHeader title={"Categorias de posts"} />

      <div className='add-category'>
        <Button text={'Nova categoria'} handlerClick={handlerOpenModal}><MdOutlineAdd className='add-icon' /></Button>
      </div>
      <ul className="categories-list">
        {categories?.content?.length === 0 ? <EmptyMessage message='Nenhuma categoria' /> :

          categories?.content?.map(category => (
            <li className="post" key={category.id}>
              <div>
                <strong>{category.name}</strong>
                <p>{category.description}</p>
              </div>
              <span className='edit'><GrFormEdit /></span>
              <span className='delete'><MdDelete className='delete-icon' /></span>
            </li>
          ))
        }
      </ul>

      {isSucessModalOpen && <SucessModal />}
      {isModalOpen &&
        <Modal onClose={handlerCloseModal} handlerSubmit={handlerSubmit} isLoading={isLoading}>
          <div>
            <Input label="Nome" type="text" name="name" placeholder="Nome da categoria" value={name} handlerOnChange={(e) => setName(e)} />
            <Input label="Descrição" type="text" name="description" placeholder="Descrição da categoria" value={description} handlerOnChange={(event) => setNewDescription(event)} />
          </div>
        </Modal>}
    </div>
  )
}

export default CategoriesContent;
