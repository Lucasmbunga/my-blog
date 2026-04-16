import type { FC, ReactElement } from "react";
import './Button.css'
interface ButtonProps{
  text: string;
  children?: ReactElement;
  handlerClick?(): void;
}

const Button: FC<ButtonProps> = ({text,children,handlerClick}:ButtonProps) => {
  return (
    <button className="button" onClick={handlerClick}>{children}{ text}</button>
  );
}
export default Button;