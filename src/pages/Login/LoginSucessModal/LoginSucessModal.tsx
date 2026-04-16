import type { FC } from "react"
import { FcOk } from "react-icons/fc";
import './LoginSucessModal.css'

const LoginSucessModal:FC = () => {
  return (
    <div className="sucess-login-container">
      <div>
        <span className="icon">
          <FcOk />
        </span>
        Login efetuado com sucesso
      </div>
    </div>
  )
}

export default LoginSucessModal;
