import { useState } from "react";

const useSucessModal = () => {
  const [isSucessModalOpen, setIsOpenSucessMmodal] = useState<boolean>(false);

  const closeSucessModal = () => {
    setIsOpenSucessMmodal(false)
  }
  const openSucessModal = () => {
    setIsOpenSucessMmodal(true)
  }

  return {isSucessModalOpen,closeSucessModal,openSucessModal};

}

export default useSucessModal
