import { useEffect, useState, type FC } from "react";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { FaAngleLeft } from "react-icons/fa6";
import Input from "../../components/Input/Input";
import useRegisterMutation from "../../hooks/useRegisterMutation/useRegisterMutation";
import SucessModal from "../../components/SucessModal/SucessModal";
import useModal from "../../hooks/useModal/useModal";

const Register: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { mutate, isPending, isSuccess, isError, error } = useRegisterMutation();
  const { isModalOpen,handlerCloseModal,handlerOpenModal } = useModal();

  const handlerSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRegister = {
      name,email,password
    }

    mutate(newRegister);

    setName('');
    setEmail('');
    setPassword('');
  }

  if (isError) {
    console.log(error)
  }
  else if (isSuccess) {
    console.log("Usuároi registrado com sucesso")
    handlerOpenModal();
  }


  return (
    <div className="login-container">
      <Link to={"/"} className="voltar-inicio"><FaAngleLeft /></Link>

      <div className="image"></div>
      <div className="right">
        <form action="" autoComplete="on" className="login-form" onSubmit={event=>handlerSubmit(event)}>
          <h1>Registrar-se</h1>
          <Input label="Nome Completo" type="text" name="nome-completo" placeholder="Nome Completo" value={ name} handlerOnChange={event=>setName(event)} />
          <Input label="Email" type="email" name="email" placeholder="Email" value={ email} handlerOnChange={(event)=>setEmail(event)}/>
          <Input label="Senha" type="password" name="password" placeholder="Palavra-passe" value={ password} handlerOnChange={event=>setPassword(event)} />
          <Button text={isPending? "Registrando...":"Criar conta"} ></Button>
        </form>
      </div>
      {isModalOpen && <SucessModal message="Conta criada com sucesso"/>}
    </div>
  );
}
export default Register;