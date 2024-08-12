import React, { useState } from "react";
import Header from "../../../../../../components/Header/Header";
import Footer2 from "../../../../../../components/Footer/Footer2/Footer2";
import FileImage from "../../../../../../assets/icons/docYellow.png";
import Cancel from "../../../../../../assets/icons/cancelss.png";
import Mes from "../../../../../../assets/icons/emailss.png";
import Add from "../../../../../../assets/icons/addss.png";
import Checky from "../../../../../../assets/icons/checkss.png";
import Edit from "../../../../../../assets/icons/threeDots.png";
import "./EditClientProfile.css";
import DashboardHeader from "../../../../DashboardHeader/DashboardHeader";

const EditClientProfile = () => {
  const [activeModalId, setActiveModalId] = useState(null);

  const handleToggle = (id) => {
    setActiveModalId((prevId) => (prevId === id ? null : id));
  };

  const JobProposals = [
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      Cliente: "Diego Lucsen",
      Início: "17.02.2020",
      Status: "Aguardando Pagamento",
    },
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      Cliente: "Diego Lucsen",
      Início: "17.02.2020",
      Status: "Fechado",
    },
  ];
  const getColor = (status) => {
    switch (status) {
      case "Aguardando Pagamento":
        return "rgb(218, 218, 111)";
      case "Fechado":
        return "red";
      case "Em Andamento":
        return "green";
      case "Em Disputa":
        return "orange";
      default:
        return "gray"; // Default color
    }
  };
  return (
    <>
      <DashboardHeader />
      <div className="edit-client">
        <div className="status">
          <h1>Status</h1>
          <select name="options" id="">
            <option value="Em Andamento">Todos</option>
            <option value="Em Disputa">Todos</option>
          </select>
          <label htmlFor="">Client</label>
          <input type="text" name="name" placeholder="Nome do cliente" />
          <input type="text" name="title" placeholder="Título do projeto" />
        </div>
        <div className="job-proposals">
          <div className="top-c">
            <h2>Jobs com propostas:</h2>
            <div className="total">
              <p>Total</p>
              <p>{JobProposals.length}</p>
            </div>
          </div>
          {JobProposals.map((job, index) => (
            <div className="job-card" key={index}>
              <div style={{ display: "flex" }}>
                <img src={job.image} alt={job.image.name} className="doc" />
                <div className="job-type">
                  <div className="topic">
                    <p>{job.appName}</p>
                  </div>

                  <div className="center">
                    <p>Propostas({job.Propostas})</p>
                    <p>
                      Cliente:
                      <span style={{ color: "#D6B8FF" }}>{job.Cliente}</span>
                    </p>
                    <p>Início: {job.Início}</p>
                  </div>

                  <div className="edit">
                    <p>
                      Status:
                      <span style={{ color: getColor(job.Status) }}>
                        {job.Status}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {activeModalId === `proposal-${index}` && <UpdateJob />}
              <img
                src={Edit}
                alt={job.image.name}
                className="threeDots"
                onClick={() => handleToggle(`proposal-${index}`)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export const UpdateJob = () => {
  return (
    <div className="updateJobss">
      <div>
        <img src={Mes} alt="email icon" />
        <p>Enviar Mensagem</p>
      </div>
      <div>
        <img src={Add} alt="email icon" />
        <p>Ver Perfil</p>
      </div>

      <div>
        <img src={Checky} alt="email icon" />
        <p>Aceitar Proposta</p>
      </div>

      <div>
        <img src={Cancel} alt="email icon" />
        <p>Rejeitar Proposta</p>
      </div>
    </div>
  );
};

export default EditClientProfile;
