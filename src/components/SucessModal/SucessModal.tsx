import { type FC } from 'react'
import { FcOk } from 'react-icons/fc';
import './SucessModal.css'

interface SucessModalProps {
  message?: string;
}
const SucessModal: FC<SucessModalProps> = ({ message="Adicionado com sucesso!" }: SucessModalProps) => {
  return (
    <div className="sucess-modal-container">
      <div className='sucess-modal'>
        <p className='icon'><FcOk /></p>
        <p className='message'>{message}</p>
      </div>
    </div>
  )
}

export default SucessModal;
