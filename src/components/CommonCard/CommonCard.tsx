import type { FC } from "react";

import "./CommonCard.css"
interface CardAboutProps{
  title: string;
  iconSource: string;
  text: string;
}
const CommonCard: FC<CardAboutProps> = ({title,iconSource,text}:CardAboutProps) => {
  return (
    <div className="card">
      <div className="icon">
        {iconSource}
      </div>
      <h3>{title}</h3>
      <p>{ text}</p>
    </div>
  );
}
export default CommonCard;