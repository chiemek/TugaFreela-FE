import React, { useState } from "react";
import DHeader from "../../DashboardHeader/DashboardHeader";
import MoneyBag from "../../../../assets/icons/moneyBag.png";
import ProfilPic from "../../../../assets/images/img1427.jpg";
import Star from "../../../../assets/icons/star.png";
import Button from "../../../../components/Button/Button";
import FileImage from "../../../../assets/icons/docYellow.png";
import Edit from "../../../../assets/icons/threeDots.png";
import Footer from "../../../../components/Footer/Footer";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";
import Proposals from "../../../../assets/icons/proposal.png";
import Circle from "../../../../assets/icons/circle.png";
import Mes from "../../../../assets/icons/emailss.png";
import Add from "../../../../assets/icons/addss.png";
import Checky from "../../../../assets/icons/checkss.png";
import Cancel from "../../../../assets/icons/cancelss.png";
import People from "../../../../assets/icons/peopless.png";
import Edity from "../../../../assets/icons/editss.png";
import Viewy from "../../../../assets/icons/viewss.png";
import "./ClientDashboard.css";
import Pyramid from "../../../../assets/icons/pyramid.png";
import Step1 from "../../../../assets/icons/step1.png";
import Step2 from "../../../../assets/icons/step2.png";
import Step3 from "../../../../assets/icons/step3.png";
import Ribbon from "../../../../assets/icons/ribbon.png";
import PurchasePopUp from "../../../../components/PurchasePopUp/PurchasePopUp";

const ClientDashboard = () => {
  const [activeModalId, setActiveModalId] = useState(null);

  const handleToggle = (id) => {
    setActiveModalId((prevId) => (prevId === id ? null : id));
  };
  const subHeader = [
    {
      image: MoneyBag,
      amount: `R$${8000}`,
      description: "Seus ganhos",
    },
    {
      image: Proposals,
      amount: 566,
      description: "Projetos publicados",
    },
    {
      image: Circle,
      amount: 7,
      description: "Projetos em andamento",
    },
    {
      image: Checky,
      amount: 2,
      description: "Projetos concluídos",
    },
  ];

  const JobProposals = [
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      freelancer: "Diego Lucsen",
      Início: "17.02.2020",
      Status: "Aguardando Pagamento",
    },
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      freelancer: "Diego Lucsen",
      Início: "17.02.2020",
      Status: "Fechado",
    },
  ];

  const JobProposal2 = [
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      freelancer: "Diego Lucsen",
      Início: "17.02.2020",
      Status: "Em Andamento",
    },
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      freelancer: "Diego Lucsen",
      Início: "17.02.2020",
      Status: "Em Disputa",
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
      <DHeader />
      {/* <PurchasePopUp /> */}

      <div className="freelancerDashboard">
        <div className="subHeader">
          {subHeader.map((item, index) => (
            <div className="cards" key={index}>
              <div className="img-container">
                <img src={item.image} alt={item.image.name} />
              </div>
              <div className="desc-container">
                <div className="amount">{item.amount}</div>
                <div className="descriptions">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <section style={{ display: "grid", gridTemplateColumns: "25vw 1fr" }}>
          <aside className="left-aside">
            <div className="first-box">
              <div className="about">
                <img
                  src={ProfilPic}
                  alt="profile picture"
                  className="profile"
                />
                <div className="text">
                  <div className="rating">
                    <h5>Membro gratuito</h5>
                    <h3>Paulo Santos</h3>
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <img key={index} src={Star} alt="" />
                      ))}
                    <p>10</p>
                    <img src={Pyramid} alt="" style={{ display: "block" }} />
                  </div>
                  <Button bgColor={"#D6B8FF"} font=".8rem">
                    ENCONTRAR JOB
                  </Button>
                </div>
              </div>
              <div className="details">
                <div>
                  <p>R$ 3.270,00</p>
                  <p style={{ color: "#D6B8FF", fontSize: "0.8rem" }}>
                    Despesa atual
                  </p>
                </div>
                <div>
                  <p>12</p>
                  <p style={{ color: "#D6B8FF", fontSize: "0.8rem" }}>
                    Projetos Ativos
                  </p>
                </div>
              </div>
            </div>
            <div className="first-box">
              <div className="about">
                <div className="text">
                  <div className="rating">
                    <h5>Nível</h5>
                    <h3>Iniciante</h3>
                  </div>
                  <Button bgColor={"#FFC107"} font=".8rem">
                    ENCONTRAR JOB
                  </Button>
                </div>
              </div>
              <div className="details2">
                <ProgressBar
                  currentProgress={50}
                  maxProgress={200}
                  color="#f6f3f3"
                />
                <p style={{ fontSize: "0.8rem", marginTop: "0.8rem" }}>
                  Os níveis de experiência são atingidos conforme o número de
                  projetos concluídos são alcançados. Aumente seu nível e ganhe
                  mais prestígio na plataforma
                </p>
              </div>
            </div>
          </aside>
          <aside className="right-aside">
            <div className="job-proposals">
              <h2>Jobs com propostas:</h2>
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
                          Freelancer:
                          <span style={{ color: "#D6B8FF" }}>
                            {job.Cliente}
                          </span>
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
            <div className="job-proposals">
              <h2>Minhas propostas ativas:</h2>
              {JobProposal2.map((job, index) => (
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
                          Freelancer:
                          <span style={{ color: "#D6B8FF" }}>
                            {job.Cliente}
                          </span>
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

                  {activeModalId === `proposal2-${index}` && <UpdateJob />}
                  <img
                    src={Edit}
                    alt={job.image.name}
                    className="threeDots"
                    onClick={() => handleToggle(`proposal-${index}`)}
                  />
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
      <Footer />
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
        <p>Solicitar Novo Prazo</p>
      </div>
      <div>
        <img src={Checky} alt="email icon" />
        <p>Concluir Projeto</p>
      </div>
      <div>
        <img src={Cancel} alt="email icon" />
        <p>Fechar Projeto</p>
      </div>
      <div>
        <img src={Viewy} alt="email icon" />
        <p>Visualizar Projeto</p>
      </div>
      <div>
        <img src={People} alt="email icon" />
        <p>Abir Disputa</p>
      </div>
      <div>
        <img src={Edity} alt="email icon" />
        <p>Editar Projeto</p>
      </div>
      <div>
        <img src={Add} alt="email icon" />
        <p>Analisar Novo Prazo</p>
      </div>
    </div>
  );
};

export default ClientDashboard;
