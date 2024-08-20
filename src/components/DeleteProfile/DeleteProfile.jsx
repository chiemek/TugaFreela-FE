import React from "react";
import Button from "../Button/Button";
import "./DeleteProfile.css";

const DeleteProfile = () => {
  return (
    <div className="modal-delete">
      <div className="pop-up-delete">
        <div className="body">
          <p>Certeza que deseja deletar a sua conta definitivamente?</p>
          <p style={{ fontSize: ".8rem" }}>
            Lembre-se que ao deletar a sua conta não sera possível utilizar
            novamente suas informações para cadastro.
          </p>
        </div>

        <Button bgColor="#C10505" font=".7rem" width="9rem">
          DELETAR
        </Button>
      </div>
    </div>
  );
};
export default DeleteProfile;
