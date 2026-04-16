import { type FC, type PropsWithChildren, type ReactElement } from 'react'
import "./Modal.css"
import Button from '../Button/Button';
import { IoClose } from 'react-icons/io5';

interface ModalProps{
  isLoading: boolean;
  children: PropsWithChildren<ReactElement>;
  onClose?(): void;
  handlerSubmit(): void;
}

const Modal: FC<ModalProps> = ({children,onClose,handlerSubmit,isLoading }: ModalProps) => {

  return (
    <div className='modal-overlay' onClick={onClose}>
      <form className="modal-content" onSubmit={(event) => {
        event.preventDefault();
        handlerSubmit();
      }} onClick={e => e.stopPropagation()}>
        <div className='close-icon' onClick={onClose}><IoClose/></div>
        {children}
        <Button text={isLoading ? 'Salvando...' : 'Salvar'}/>
      </form>
    </div>
  )
}

export default Modal;
