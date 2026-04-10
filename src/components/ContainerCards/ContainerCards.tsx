import type { FC, PropsWithChildren } from "react";
import './ContainerCards.css'

const ContainerCards: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className="container-cards">
      {children}
    </div>
  );
}
export default ContainerCards;