import { useEffect, useState, type FC } from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ContainerCards from '../../../components/ContainerCards/ContainerCards';
import useTagsDta from '../../../hooks/useTagsData/useTagsData';
import './TagsContent.css'
import { GrFormEdit } from 'react-icons/gr';
import { MdDelete, MdOutlineAdd } from 'react-icons/md';
import Button from '../../../components/Button/Button';
import useModal from '../../../hooks/useModal/useModal';
import useSucessModal from '../../../hooks/useSucessModal/useSucessModal';
import Modal from '../../../components/Modal/Modal';
import SucessModal from '../../../components/SucessModal/SucessModal';
import useTagsMutation from '../../../hooks/useTagsData/useTagsMutation';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import EmptyMessage from '../../../components/EmptyMessage/EmptyMessage';
import Input from '../../../components/Input/Input';

const TagsContent: FC = () => {

  const { mutate, isSuccess } = useTagsMutation();
  const { isModalOpen, handlerOpenModal, handlerCloseModal } = useModal();
  const { isSucessModalOpen, openSucessModal, closeSucessModal } = useSucessModal();
  const [name, setName] = useState<string>('');
  const { data: tags, isLoading, error } = useTagsDta();


  const handlerSubmit = () => {
    const newTag = {
      name
    }
    mutate(newTag)

    if (isSuccess) {
      openSucessModal();
      setName('');
    }

    setTimeout(() => {
      closeSucessModal();
    }, 1500)
  }

  useEffect(() => {
    handlerCloseModal();
  }, [isSuccess])


  if (isLoading) {
    return <Loading />
  }
  else if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div className='tags-content-container'>
      <DashboardHeader title='Todas as tags' />
      <div className='container-button-add'><Button text='Nova tag' children={<MdOutlineAdd />} handlerClick={handlerOpenModal} /></div>
      <ContainerCards>
        {tags?.content.length === 0 ? <EmptyMessage message='Nenhuma tag' /> :

          tags?.content.map(tag => (
            <div className='tag-content' key={tag.id}>
              {tag.id}
              <span>{tag.name}</span>
              <span className='edit-icon'><GrFormEdit /></span>
              <span className='delete-icon'><MdDelete /></span>
            </div>
          ))}
      </ContainerCards>

      {isSucessModalOpen && <SucessModal />}
      {isModalOpen &&
        <Modal onClose={handlerCloseModal} handlerSubmit={handlerSubmit} isLoading={isLoading}>
          <div>
            <Input label='Nome da tag' type='text' name='tag' placeholder='Nome da tag' value={name} handlerOnChange={event => setName(event)} />
          </div>
        </Modal>}
    </div>
  )
}

export default TagsContent;
