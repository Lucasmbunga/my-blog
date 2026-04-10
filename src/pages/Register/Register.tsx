import type { FC } from "react";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import FormGroup from "../../components/FormGroup/FormGoup";
import Button from "../../components/Button/Button";
import { FaAngleLeft } from "react-icons/fa6";

const Register: FC = () => {
  return (
    <div className="login-container">
      <Link to={"/"} className="voltar-inicio"><FaAngleLeft /></Link>

      <div className="image"></div>
      <div className="right">
        <form action="" autoComplete="on" className="login-form">
          <h1>Registrar-se</h1>
          <FormGroup label="Nome Completo" type="text" name="nome-completo" placeholder="Nome Completo" />
          <FormGroup label="Email" type="email" name="email" placeholder="Email" />
          <FormGroup label="Senha" type="password" name="password" placeholder="Palavra-passe" />
          <Button text="Criar conta" ></Button>
        </form>
      </div>
    </div>
  );
}
export default Register;