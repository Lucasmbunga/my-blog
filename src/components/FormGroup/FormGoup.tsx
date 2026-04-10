import {  type FC } from "react";

interface FormGroupProps{
  label: string;
  type: string;
  name: string;
  placeholder: string;
}
const FormGroup: FC<FormGroupProps> = ({ label, type, name, placeholder }: FormGroupProps) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} required />
    </div>
  );
}
export default FormGroup;