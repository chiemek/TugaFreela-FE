import React, { useState } from "react";
import "./ClientProfile.css";
import DHeader from "../.././../../DashBoard/DashboardHeader/DashboardHeader";
import Footer2 from "../../../../../components/Footer/Footer2/Footer2";
import Button from "../../../../../components/Button/Button";
import Premium from "../../../../../assets/icons/premium.png";
import Star from "../../../../../assets/icons/star.png";
import ProfilPic from "../../../../../assets/images/img1427.jpg";
import ProfileVerification from "../../../../../assets/icons/profileIcon.png";
import Verification from "../../../../../assets/icons/verification.png";
import PhoneVerification from "../../../../../assets/icons/phoneVeri.png";
import EmailVerification from "../../../../../assets/icons/emailVeri.png";
import ThreeDot from "../../../../../assets/icons/threeDots.png";
import Cancel from "../../../../../assets/icons/cancelss.png";
import Mes from "../../../../../assets/icons/emailss.png";
import Add from "../../../../../assets/icons/addss.png";
import Checky from "../../../../../assets/icons/checkss.png";

const Client = () => {
  const [activeModalId, setActiveModalId] = useState(null);

  const handleToggle = (id) => {
    setActiveModalId((prevId) => (prevId === id ? null : id));
  };
  const proposal = [
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      details:
        "Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas: 12 | Total: 144€ | Mensagens (8)Segue proposta para o projeto...",
    },
  ];
  return (
    <>
      <DHeader />
      <main>
        <section>
          <aside>
            <h2>Melhora de algumas páginas design/UX</h2>
            <div className="btn">
              <Button bgColor="#D6B8FF">Descrição do job:</Button>
            </div>
            <p>
              Precisamos melhorar o design/UX de algumas páginas da nossa
              plataforma.Já temos dois Devs que trabalham conosco e
              auxiliarão/orientarão no projeto.html, css, design e experiencia
              com react pra implementar
            </p>
            <div className="neccesary">
              <h3>Habilidades necessárias</h3>
              <div className="skills">
                <p>DESIGN 3D</p>
                <p>PUBLICIDADE ATL</p>
                <p>SUBMISSÃO DE ART.</p>
              </div>
            </div>
            <div className="rates">
              <h4>Projeto por hora</h4>
              <div className="input">
                <input type="text" name="hours" placeholder="12 horas" />
                <input type="text" name="rate" placeholder="20$/h" />
                <input type="text" name="total" placeholder="Total: 240$" />
              </div>
            </div>
          </aside>
          <aside>
            <div className="premuim">
              <div className="prem-head">
                <img src={Premium} alt="premium image" />
                <h3>Obtenha o máximo do seu projeto</h3>
              </div>
              <p>
                Que tal fazer um upgrade no seu projeto para que ele se destaque
                de todos os outros?
              </p>
              <div className="btn">
                <Button bgColor="#333">Destacar Projeto</Button>
              </div>
            </div>
            <div className="btn">
              <Button bgColor="green">Ativo</Button>
            </div>
            <div className="profile-client">
              <img src={ProfilPic} alt="" className="img" />
              <div className="rating-client">
                <p>Julian Dalsin</p>
                <div style={{ display: "flex" }}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <img key={index} src={Star} alt="star" />
                  ))}
                  <p>4.0</p>
                </div>
              </div>
            </div>
            <div className="confirmations-interest">
              <div
                className="sepu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                <img
                  src={ProfileVerification}
                  alt="profile"
                  style={{ width: "1rem" }}
                />
                <p>Membro desde: Janeiro/2020</p>
              </div>
              <div
                className="sepu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                <img
                  src={Verification}
                  alt="verification"
                  style={{ width: "1rem" }}
                />
                <p>12 Projetos Concluídos </p>
              </div>
              <div
                className="sepu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                <img
                  src={PhoneVerification}
                  alt="phone"
                  style={{ width: "1rem" }}
                />
                <p>Telefone verificado</p>
              </div>
              <div
                className="sepu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                <img
                  src={EmailVerification}
                  alt="email"
                  style={{ width: "1rem" }}
                />
                <p>Email verificado</p>
              </div>
            </div>
            <div className="detailed">
              <p>
                <span>10</span> <br /> Propostas
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>R$2.250.00</span> <br />
                Valor Médio (Proposta)
              </p>
              <p>
                <span>4</span> <br /> Ativo á (dias)
              </p>
            </div>
          </aside>
        </section>
        <section>
          <h1>Propostas</h1>
          {proposal.map((prop, index) => (
            <div className="propose" key={`proposal-${index}`}>
              <div
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <img src={prop.image} alt="profile picture" />
                <div className="prop-rate">
                  <h3>{prop.name}</h3>
                  {Array.from({ length: 5 }, (_, index) => (
                    <img key={index} src={Star} alt="star" />
                  ))}
                  <p
                    style={{
                      display: "inline-block",
                      marginLeft: "1rem",
                      marginBottom: ".5rem",
                    }}
                  >
                    há 2 semanas
                  </p>
                  <div className="prop-details">
                    <p>{prop.details}</p>
                  </div>
                </div>
              </div>
              {activeModalId === `proposal-${index}` && <UpdateJob />}
              <img
                src={ThreeDot}
                alt="three dots"
                className="three-dot"
                onClick={() => handleToggle(`proposal-${index}`)}
              />
            </div>
          ))}

          {/* <div className="propose">
            <div
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <img src={ProfilPic} alt="profile picture" />
              <div className="prop-rate">
                <h3>Paulo S.</h3>
                {Array.from({ length: 5 }, (_, index) => (
                  <img key={index} src={Star} alt="star" />
                ))}
                <p
                  style={{
                    display: "inline-block",
                    marginLeft: "1rem",
                    marginBottom: ".5rem",
                  }}
                >
                  há 2 semanas
                </p>
                <div className="prop-details">
                  <p>
                    Submetido: 28/01/2020 às 15:36 | Valor/h: € 12,00 | Horas:
                    12 | Total: 144€ | Mensagens (8)Segue proposta para o
                    projeto...
                  </p>
                </div>
              </div>
            </div>
            <img src={ThreeDot} alt="three dots" className="three-dot" />
          </div> */}
        </section>
      </main>

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

export default Client;
