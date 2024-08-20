import React, { useState, useEffect } from "react";
import DHeader from "../../DashboardHeader/DashboardHeader";
import MoneyBag from "../../../../assets/icons/moneyBag.png";
import Justice from "../../../../assets/icons/auction.png";
import Check from "../../../../assets/icons/check.png";
import View from "../../../../assets/icons/views.png";
import ProfilPic from "../../../../assets/images/img1427.jpg";
import Star from "../../../../assets/icons/star.png";
import Button from "../../../../components/Button/Button";
import Premium from "../../../../assets/icons/crown.png";
import FileImage from "../../../../assets/icons/docYellow.png";
import Edit from "../../../../assets/icons/threeDots.png";
import Footer from "../../../../components/Footer/Footer";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";
import Mes from "../../../../assets/icons/emailss.png";
import Add from "../../../../assets/icons/addss.png";
import Checky from "../../../../assets/icons/checkss.png";
import Cancel from "../../../../assets/icons/cancelss.png";
import People from "../../../../assets/icons/peopless.png";
import Edity from "../../../../assets/icons/editss.png";
import Viewy from "../../../../assets/icons/viewss.png";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [activeModalId, setActiveModalId] = useState(null);
  const [user, setUser] = useState(null); // Initialize user state
  const navigate = useNavigate();

  // Retrieve the user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUser(storedUserData);
    } else {
      // Redirect to login if no user data is found
      navigate("/login");
    }
  }, [navigate]);

  // Destructure user data once it is loaded
  const {
    email,
    role,
    profileImageUrl,
    jobProposals,
    level,
    views,
    balance,
    firstName,
    activeProposals,
    acceptedProposals,
  } = user || {};

  if (!user) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }
  const handleToggle = (id) => {
    setActiveModalId((prevId) => (prevId === id ? null : id));
  };

  const subHeader = [
    {
      image: MoneyBag,
      amount: `R$${balance}`,
      description: "Seus ganhos",
    },
    {
      image: Justice,
      amount: 458,
      description: "Propostas enviadas",
    },
    {
      image: Check,
      amount: acceptedProposals,
      description: "Propostas aceitas",
    },
    {
      image: View,
      amount: views,
      description: "Views no perfil",
    },
  ];

  const skills = [
    "DESIGN 3D",
    "PUBLICIDADE ATL",
    "SUBMISSAO DE ART.",
    "ANIMACAO",
    "BING/YAHOO PPC",
    "ANÚNCIO DE BANNER",
    "EXIBIÇÃO DE PUB.",
    "GOOGLE ADWORDS",
    "GOOGLE ADWORDS",
  ];

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

  const JobProposal2 = [
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      Cliente: "Diego Lucsen",
      Início: "17.02.2020",
      Status: "Em Andamento",
    },
    {
      image: FileImage,
      appName: "Design de aplicativo de eventos e entretenimento",
      Propostas: 212,
      Cliente: "Diego Lucsen",
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
        return "gray";
    }
  };

  if (!profileImageUrl) {
    return <div>Loading...</div>; // or a fallback image
  }

  return (
    <>
      <DHeader
        logoLink="/Dashboard"
        editProfile="/edit-profile"
        ProfileUrl={profileImageUrl}
      />
      <div className="freelancerDashboard">
        <div className="subHeader">
          {subHeader.map((item, index) => (
            <div className="cards" key={index}>
              <div className="img-container">
                <img src={item.image} alt={item.description} />
              </div>
              <div className="desc-container">
                <div className="amount">{item.amount}</div>
                <div className="descriptions">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <section>
          <aside className="left-aside">
            <div className="first-box">
              <div className="about">
                <img
                  src={profileImageUrl || ProfilPic}
                  alt="profile picture"
                  className="profile"
                />
                <div className="text">
                  <div className="rating">
                    <h5>Membro gratuito</h5>
                    <h3>{firstName}</h3>
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <img key={index} src={Star} alt="star" />
                      ))}
                    <p>10</p>
                  </div>
                  <Button bgColor={"#D6B8FF"}>ENCONTRAR JOB</Button>
                </div>
              </div>
              <div className="details">
                <div>
                  <p>R$ {balance}</p>
                  <p style={{ color: "#D6B8FF", fontSize: "0.8rem" }}>
                    Despesa atual
                  </p>
                </div>
                <div>
                  <p>{acceptedProposals}</p>
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
                  <Button bgColor={"#FFC107"}>ENCONTRAR JOB</Button>
                </div>
              </div>
              <div className="details2">
                <ProgressBar
                  currentProgress={level}
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
            <div className="skills">
              <h2>Minhas Habilidades</h2>
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            </div>
            <div className="premium">
              <div className="head-p">
                <img src={Premium} alt="premium logo" />
                <h3>
                  Aceda ao plano
                  <span style={{ color: "red", fontSize: "1.5rem" }}>
                    PREMIUM
                  </span>
                </h3>
              </div>
              <p>
                Aceda ao plano premium para obter o máximo de performance no seu
                trabalho. Com o plano premium qualquer projeto postado pelo
                cliente fica aberto para o envio da sua proposta.*Plano mensal
                no valor de 15€
              </p>
              <Button>Aceder a Premium</Button>
            </div>
          </aside>
          <aside className="right-aside">
            <div className="job-proposals">
              <h2>Jobs com propostas:</h2>
              {JobProposals.map((job, index) => (
                <div className="job-card" key={index}>
                  <div style={{ display: "flex" }}>
                    <img src={job.image} alt="job document" className="doc" />
                    <div className="job-type">
                      <div className="topic">
                        <p>{job.appName}</p>
                      </div>

                      <div className="center">
                        <p>Propostas({job.Propostas})</p>
                        <p>
                          Cliente:
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
                    alt="edit icon"
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
                    <img src={job.image} alt="job document" className="doc" />
                    <div className="job-type">
                      <div className="topic">
                        <p>{job.appName}</p>
                      </div>

                      <div className="center">
                        <p>Propostas({job.Propostas})</p>
                        <p>
                          Cliente:
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
                    alt="edit icon"
                    className="threeDots"
                    onClick={() => handleToggle(`proposal2-${index}`)}
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
        <img src={Add} alt="add icon" />
        <p>Solicitar Novo Prazo</p>
      </div>
      <div>
        <img src={Checky} alt="check icon" />
        <p>Concluir Projeto</p>
      </div>
      <div>
        <img src={Cancel} alt="cancel icon" />
        <p>Fechar Projeto</p>
      </div>
      <div>
        <img src={Viewy} alt="view icon" />
        <p>Visualizar Projeto</p>
      </div>
      <div>
        <img src={People} alt="people icon" />
        <p>Abir Disputa</p>
      </div>
      <div>
        <img src={Edity} alt="edit icon" />
        <p>Editar Projeto</p>
      </div>
      <div>
        <img src={Add} alt="add icon" />
        <p>Analisar Novo Prazo</p>
      </div>
    </div>
  );
};

export default DashBoard;
