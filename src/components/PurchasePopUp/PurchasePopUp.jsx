import React from "react";
import Pyramid from "../../assets/icons/pyramid.png";
import Ribbon from "../../assets/icons/ribbon.png";
import Step1 from "../../assets/icons/step1.png";
import Step2 from "../../assets/icons/step2.png";
import Step3 from "../../assets/icons/step3.png";
import Button from "../Button/Button";
import "./PurchasePopUp.css";

const PurchasePopUp = () => {
  return (
    <div className="modal">
      <div className="pop-up">
        <div className="topic-here">
          <img src={Pyramid} alt="" className="piramid" />
          <img src={Ribbon} alt="" className="ribbon" />
          <h2>Comprar nível para sua conta</h2>
        </div>
        <div className="body">
          <p>
            Com o plano de nivelação ganhas acesso a projetos de qualificação e
            pagamento elevados.
          </p>
          <p>
            Ao aceder a um nível superior seus ganhos podem duplicar em semanas.
          </p>
          <p>
            Cada pacote de nível aumenta 3 pontos. Podendo comprar apenas 3
            pacotes por ano. Aproveite!
          </p>
        </div>
        <div className="steps">
          <img src={Step1} alt="" className="step1" />
          <img src={Step2} alt="" className="step2" />
          <img src={Step3} alt="" className="step3" />
        </div>
        <p>
          55€ por pacote, aproveite pois nossos pacotes de nivelação são apenas
          anuais.
        </p>
        <Button bgColor="#333" width="100%">
          Comprar Nível
        </Button>
      </div>
    </div>
  );
};

export default PurchasePopUp;
