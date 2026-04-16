import { type FC } from 'react'
import { GrFormEdit } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import './UsersTable.css'
import type { UserProps } from '../../../services/userService';

interface UsersTableProps {
  data: UserProps[] | undefined;
}
const UsersTable: FC<UsersTableProps> = ({ data }: UsersTableProps) => {
  return (
    <div className='container-table'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Visitante</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.guest ? "Sim" : "Não"}</td>
              <td className='edit-icon'><GrFormEdit /></td>
              <td className='delete-icon'><MdDelete /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable;
