import { useState } from "react"

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlerCloseModal = () => {
    setIsModalOpen(false);
  }
  const handlerOpenModal = () => {
    setIsModalOpen(true);
  }

  return {isModalOpen,handlerCloseModal,handlerOpenModal};
}

export default useModal
