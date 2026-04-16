import { useEffect, useState, type FC } from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './UsersContent.css'
import Button from '../../../components/Button/Button';
import { MdOutlineAdd } from 'react-icons/md';
import UsersTable from '../UsersTable/UsersTable';
import useModal from '../../../hooks/useModal/useModal';
import useSucessModal from '../../../hooks/useSucessModal/useSucessModal';
import Modal from '../../../components/Modal/Modal';
import SucessModal from '../../../components/SucessModal/SucessModal';
import useUsers from '../../../hooks/useUsersData/useUsersData';
import useUsersMutation from '../../../hooks/useUsersData/useUsersMutation';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Loading from '../../../components/Loading/Loading';
import EmptyMessage from '../../../components/EmptyMessage/EmptyMessage';
import Input from '../../../components/Input/Input';

const UsersContent: FC = () => {

  const { isModalOpen, handlerOpenModal, handlerCloseModal } = useModal();
  const { isSucessModalOpen, openSucessModal, closeSucessModal } = useSucessModal();

  const { mutate, isSuccess } = useUsersMutation();
  const { data: users, isLoading, error } = useUsers();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');


  const handlerSubmit = () => {
    const newUser = { name, email, password, role }
    mutate(newUser);

    if (isSuccess) {
      openSucessModal();
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
    <div className='users-content-container'>
      <DashboardHeader title='Todos usuários' />
      <div className='users-content'>
        <div className='add-category'><Button text='Novo usuário' handlerClick={handlerOpenModal}><MdOutlineAdd className='add-icon' /></Button> </div>
        {users?.content.length === 0 ? <EmptyMessage message='Nenhum usuário' /> :
          <UsersTable data={users?.content} />
        }
      </div>
      {isSucessModalOpen && <SucessModal message='Usuário Registrado com sucesso' />}

      {isModalOpen &&
        <Modal onClose={handlerCloseModal} handlerSubmit={handlerSubmit} isLoading={isLoading}>
          <div>
            <Input label='Nome' type='text' name='name' value={name} placeholder='Nome do usuário' handlerOnChange={event => setName(event)} />
            <Input label='Email' type='email' name='email' value={email} placeholder='seuemail@gmail.com' handlerOnChange={event => setEmail(event)} />
            <Input label='Palavra-passe' type='password' name='password' value={password} placeholder='Palavra-passe' handlerOnChange={event => setPassword(event)} />
            <Input label='Previlégio' type='text' name='role' value={role} placeholder='Privilégio do usuário' handlerOnChange={event => setRole(event)} />
          </div>
        </Modal>}

    </div>
  )
}

export default UsersContent;
