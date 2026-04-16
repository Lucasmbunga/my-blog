import { type FC } from "react";
import './Input.css'

interface InputProps{
  label: string;
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  handlerOnChange(value:string): void;
}
const Input: FC<InputProps> = ({ label, type, name,value='', placeholder,handlerOnChange }: InputProps) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} required value={value} onChange={event=>(handlerOnChange(event.target.value))} />
    </div>
  );
}
export default Input;