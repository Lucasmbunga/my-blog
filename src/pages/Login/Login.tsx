import { useState, type FC } from "react";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import FormGroup from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { FaAngleLeft } from "react-icons/fa6";
import useLoginData from "../../hooks/useLoginData/useLoginData";
import LoginSucessModal from "./LoginSucessModal/LoginSucessModal";

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { data, mutate: mutateLogin, isSuccess } = useLoginData();
  const [isSucessModalOpen, setIsSucessModalOpen] = useState<boolean>(false);

  const handlerSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginData = { email, password };

    mutateLogin(loginData);

    if (isSuccess) {

      localStorage.setItem("token", JSON.stringify(data))
      setTimeout(() => {
        setIsSucessModalOpen(true);
      }, 500)
    }

    setTimeout(() => {
      setIsSucessModalOpen(false)
    }, 9000)
  }

  return (
    <div className="login-container">
      <Link to={"/"} className="voltar-inicio"><FaAngleLeft /></Link>
      <div className="image"></div>
      <div className="right">
        <form action="" autoComplete="on" className="login-form" onSubmit={event => handlerSubmit(event)}>
          <h1>Login</h1>
          <FormGroup label="Email" type="email" name="email" value={email} placeholder="Email" handlerOnChange={event => setEmail(event)} />
          <FormGroup label="Senha" type="password" name="password" placeholder="Palavra-passe" value={password} handlerOnChange={event => setPassword(event)} />
          <Button text="Entrar" />
          <p className="password-forget">Não tens uma conta?
            <Link to={"/sign-up"} className="link"> Criar conta</Link>
          </p>
        </form>
      </div>
      {isSucessModalOpen && <LoginSucessModal />}
    </div >
  );
}
export default Login;