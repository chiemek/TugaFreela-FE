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
import Pyramid from "../../../../assets/icons/pyramid.png";
import Ribbon from "../../../../assets/icons/ribbon.png";
import Step1 from "../../../../assets/icons/step1.png";
import Step2 from "../../../../assets/icons/step2.png";
import Step3 from "../../../../assets/icons/step3.png";
import "../../../../components/PurchasePopUp/PurchasePopUp";

const DashBoard = () => {
  const [activeModalId, setActiveModalId] = useState(null);
  const [user, setUser] = useState(null); // Initialize user state
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle modal opening
  const handleOpenModal = () => {
    setShowModal(true);
    console.log("Modal opened");
  };

  // handle modal closing
  const handleCloseModal = () => {
    setShowModal(false);
  };

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
    areaOfInterest,
    projectCompleted,
    executingProjects,
    projectsInDespute,
    customerRating,
    customerFeedback,
    notifications,
    chat,
    skills,
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

  // const skills = [
  //   "DESIGN 3D",
  //   "PUBLICIDADE ATL",
  //   "SUBMISSAO DE ART.",
  //   "ANIMACAO",
  //   "BING/YAHOO PPC",
  //   "ANÚNCIO DE BANNER",
  //   "EXIBIÇÃO DE PUB.",
  //   "GOOGLE ADWORDS",
  //   "GOOGLE ADWORDS",
  // ];

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
        editProfile="/Profile"
        ProfileUrl={profileImageUrl}
      />
      {showModal && (
        <div className="modal">
          <div className="pop-up">
            <div className="topic-here">
              <img src={Pyramid} alt="" className="piramid" />
              <img src={Ribbon} alt="" className="ribbon" />
              <h2>Comprar nível para sua conta</h2>
            </div>
            <div className="body">
              <p>
                Com o plano de nivelação ganhas acesso a projetos de
                qualificação e pagamento elevados.
              </p>
              <p>
                Ao aceder a um nível superior seus ganhos podem duplicar em
                semanas.
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
              55€ por pacote, aproveite pois nossos pacotes de nivelação são
              apenas anuais.
            </p>
            <Button bgColor="#333" width="100%" onClick={handleCloseModal}>
              Comprar Nível
            </Button>
          </div>
        </div>
      )}
      {!showModal && (
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
                    <Button bgColor={"#FFC107"} onClick={handleOpenModal}>
                      COMPRAR NÍVEL
                    </Button>
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
                    projetos concluídos são alcançados. Aumente seu nível e
                    ganhe mais prestígio na plataforma
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
                  Aceda ao plano premium para obter o máximo de performance no
                  seu trabalho. Com o plano premium qualquer projeto postado
                  pelo cliente fica aberto para o envio da sua proposta.*Plano
                  mensal no valor de 15€
                </p>
                <Button onClick={handleOpenModal}>Aceder a Premium</Button>
              </div>
            </aside>
            <aside className="right-aside">
              <div className="job-proposals">
                <h2>Jobs com propostas:</h2>
                {jobProposals?.map((job, index) => (
                  <div className="job-card" key={job._id || index}>
                    <div style={{ display: "flex" }}>
                      {/* Image handling could be added here if needed */}
                      <img src={FileImage} alt="job document" className="doc" />

                      <div className="job-type">
                        <div className="topic">
                          <p>{job.name}</p>
                        </div>

                        <div className="center">
                          <p>Propostas: {job.proposals}</p>
                          <p>
                            Cliente:
                            <span style={{ color: "#D6B8FF" }}>
                              {job.clientsName}
                            </span>
                          </p>
                          <p>
                            Início:{" "}
                            {job.date
                              ? new Date(job.date).toLocaleDateString()
                              : "Data não disponível"}
                          </p>
                        </div>

                        <div className="edit">
                          <p>
                            Status:
                            <span style={{ color: getColor(job.status) }}>
                              {job.status || "Status não definido"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Modal and Edit Icon */}
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
                {activeProposals?.map((job, index) => (
                  <div className="job-card" key={job._id || index}>
                    <div style={{ display: "flex" }}>
                      <img src={FileImage} alt="job document" className="doc" />

                      <div className="job-type">
                        <div className="topic">
                          <p>{job.name}</p>
                        </div>

                        <div className="center">
                          <p>Propostas: {job.proposals}</p>
                          <p>
                            Cliente:
                            <span style={{ color: "#D6B8FF" }}>
                              {job.clientsName}
                            </span>
                          </p>
                          <p>
                            Início:{" "}
                            {job.date
                              ? new Date(job.date).toLocaleDateString()
                              : "Data não disponível"}
                          </p>
                        </div>

                        <div className="edit">
                          <p>
                            Status:
                            <span style={{ color: getColor(job.status) }}>
                              {job.status || "Status não definido"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Modal and Edit Icon */}
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
      )}

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
