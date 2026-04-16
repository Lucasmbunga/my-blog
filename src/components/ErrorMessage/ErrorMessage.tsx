import type { FC } from "react"
import './ErrorMessage.css'

interface ErrorMessageProps{
  error: Error;
}
const ErrorMessage:FC<ErrorMessageProps> = ({error}:ErrorMessageProps) => {
  return (
    <div className='error-message'>
      <p>Ocorreu algum erro: {error.message}. Causa:{error.cause as string}</p>
    </div>
  )
}

export default ErrorMessage
