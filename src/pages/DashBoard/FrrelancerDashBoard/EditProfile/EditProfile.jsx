import React from "react";
import Header from "../../DashboardHeader/DashboardHeader";

import "./EditProfile.css";
import ProfilPic from "../../../../assets/images/img1427.jpg";
import Button from "../../../../components/Button/Button";
import Footer2 from "../../../../components/Footer/Footer2/Footer2";

const EditProfile = () => {
  return (
    <>
      <Header />
      <div className="edit-prof">
        <form action="">
          <div className="top">
            <div className="left-form">
              <h2>Editar Perfil</h2>
              <label htmlFor="">Título profissional</label>
              <input type="text" name="title" placeholder="Ex: UI Designer" />
              <label htmlFor="">Descrição</label>
              <textarea
                name=""
                id=""
                placeholder="Conte sobre você..."
              ></textarea>
            </div>
            <div className="right-form">
              <img src={ProfilPic} alt="" />
              <Button bgColor="green">Alterar Foto</Button>
            </div>
          </div>
          <label htmlFor="">Área de interesse</label>
          <input type="text " name="interest" placeholder="Ex: UI Designer" />
          <label htmlFor="">Habilidades</label>
          <input type="text" name="skill" id="" placeholder="Habilidades" />

          <Button bgColor="#D6B8FF">SALVAR ALTERAÇÕES</Button>
        </form>
      </div>

      <Footer2 />
    </>
  );
};

export default EditProfile;
