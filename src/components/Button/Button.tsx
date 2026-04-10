import type { FC, ReactElement } from "react";
import './Button.css'
interface ButtonProps{
  text: string;
  children?:ReactElement
}

const Button: FC<ButtonProps> = ({text,children}:ButtonProps) => {
  return (
    <button className="button">{children}{ text}</button>
  );
}
export default Button;