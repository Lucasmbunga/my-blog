import type { FC } from "react";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import FormGroup from "../../components/FormGroup/FormGoup";
import Button from "../../components/Button/Button";
import { FaAngleLeft } from "react-icons/fa6";

const Login: FC = () => {
  return (
    <div className="login-container">
      <Link to={"/"} className="voltar-inicio"><FaAngleLeft /></Link>
      <div className="image"></div>
      <div className="right">
        <form action="" autoComplete="on" className="login-form">
          <h1>Login</h1>
          <FormGroup label="Email" type="email" name="email" placeholder="Email" />
          <FormGroup label="Senha" type="password" name="password" placeholder="Palavra-passe" />
          <Button text="Entrar" />
          <p className="password-forget">Não tens uma conta?
            <Link to={"/sign-up"} className="link"> Criar conta</Link>
          </p>
        </form>
      </div>
    </div >
  );
}
export default Login;