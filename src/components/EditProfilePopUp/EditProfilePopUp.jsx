import React from "react";
import Button from "../Button/Button";

const EditProfilePopUp = () => {
  return (
    <div className="modal">
      <div className="pop-up">
        <div className="body">
          <p>
            Seu perfil só pode ser editado uma vez ao ano. Tenha atenção na
            edição que está sendo feita e confirme todos os dados antes de
            prosseguir.
          </p>
          <p style={{ fontSize: ".6rem" }}>
            Tem certeza que deseja realizar essas alterações?
          </p>
        </div>
        <div
          style={{ display: "flex", gap: "2.5rem", justifyContent: "center" }}
        >
          <Button bgColor="#D6B8FF" font=".6rem" width="9rem">
            SALVAR ALTERAÇÕES
          </Button>
          <Button bgColor="#C10505" font=".7rem" width="9rem">
            CANCELAR
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EditProfilePopUp;
