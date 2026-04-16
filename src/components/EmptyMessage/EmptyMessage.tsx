import  { type FC } from 'react'
import './EmptyMessage.css'


interface EmptyMessageProps{
  message: string;
}
const EmptyMessage:FC<EmptyMessageProps> = ({message}:EmptyMessageProps) => {
  return (
    <div className='container-empty-result'>
      <p>{ message}</p>
    </div>
  )
}

export default EmptyMessage;
