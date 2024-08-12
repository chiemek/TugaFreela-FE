import React from "react";
import Header from "../../DashboardHeader/DashboardHeader";

import ProfilPic from "../../../../assets/images/img1427.jpg";
import Star from "../../../../assets/icons/star.png";
import ProfileVerification from "../../../../assets/icons/profileIcon.png";
import Verification from "../../../../assets/icons/verification.png";
import PhoneVerification from "../../../../assets/icons/phoneVeri.png";
import EmailVerification from "../../../../assets/icons/emailVeri.png";
import FacebookVerification from "../../../../assets/icons/facebookVeri.png";
import Button from "../../../../components/Button/Button";

import "./Profile.css";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";
import Footer2 from "../../../../components/Footer/Footer2/Footer2";

const Profile = () => {
  const profile = [
    {
      name: "Julian Dasilva",
      job: "UI/UX Designer | Web Designer | Marketing Digital",
      level: "Iniciante",
      progress: 10,
    },
  ];

  const feedback = [
    {
      image: ProfilPic,
      name: "Paulo S.",
      review: "Ótimo profissional! Recomendo.",
      rating: 5,
      title: "Design de aplicativo de eventos e entretenimento",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      review: "Ótimo profissional! Recomendo.",
      rating: 5,
      title: "Design de aplicativo de eventos e entretenimento",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      review: "Ótimo profissional! Recomendo.",
      rating: 5,
      title: "Design de aplicativo de eventos e entretenimento",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      review: "Ótimo profissional! Recomendo.",
      rating: 5,
      title: "Design de aplicativo de eventos e entretenimento",
    },
    {
      image: ProfilPic,
      name: "Paulo S.",
      review: "Ótimo profissional! Recomendo.",
      rating: 5,
      title: "Design de aplicativo de eventos e entretenimento",
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
  return (
    <div style={{ backgroundColor: "rgb(223, 225, 226)" }}>
      <Header />
      <div className="profile-container">
        <aside className="first-left-aside">
          <div className="edit">
            <div className="set">
              <img src={ProfilPic} alt="profile picture" className="profile" />
              <div className="testRate">
                <h2>{profile[0].name}</h2>
                <p>{profile[0].job}</p>
                <div className="star">
                  <div>
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <img key={index} src={Star} alt="" />
                      ))}
                  </div>
                  <p>[5.0 - 125 avaliacoes]</p>
                </div>

                <p>Nível</p>
                <p style={{ color: "#c06be8" }}>{profile[0].level}</p>
                <ProgressBar
                  currentProgress={profile[0].progress}
                  maxProgress={100}
                  style={{ color: "#000" }}
                />
              </div>
            </div>

            <p style={{ color: "#c06be8", cursor: "pointer" }}>Editar Perfil</p>
          </div>
          <div className="feedback">
            <h2>Feedback dos clientes</h2>

            <div className="feedback-card">
              {feedback.map((items, index) => {
                return (
                  <div className="feedback-clients">
                    <div key={index} style={{ display: "flex", gap: "1rem" }}>
                      <img
                        src={items.image}
                        alt="profile image"
                        className="feedback-profile"
                      />
                      <div className="name">
                        <p>{items.title}</p>
                        <p style={{ color: "#525050" }}>{items.review}</p>
                        <div
                          className="feedback-star"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <p>Paulo S.</p>
                          <div>
                            {Array(5)
                              .fill()
                              .map((_, starIndex) => (
                                <img key={starIndex} src={Star} alt="" />
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="feedback-review">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <p>5.0</p>
                        <div>
                          {Array(5)
                            .fill()
                            .map((_, starIndex) => (
                              <img key={starIndex} src={Star} alt="" />
                            ))}
                        </div>
                      </div>
                      <p>20/02/20</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
        <aside className="first-right-aside">
          <div className="area-of-interest">
            <h2>Área de Interesse</h2>
            <div className="list-interest">
              <p>DESIGN</p>
              <p>MARKETING E R.P</p>
              <p>MARKETING DE PES.</p>
            </div>
            <h2>Habilidades</h2>
            <div className="list-interest">
              {skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
            <h2>Confirmações do perfil</h2>
            <div className="confirmations-interest">
              <div
                className="sep"
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
                className="sep"
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
                <p>Pagamento verificado</p>
              </div>
              <div
                className="sep"
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
                className="sep"
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
              <div
                className="sep"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                <img
                  src={FacebookVerification}
                  alt="facebook"
                  style={{ width: "1rem" }}
                />
                <p>Rede social verificada</p>
              </div>
            </div>
          </div>
          <div className="additional-info">
            <h2>Informações Adicionais</h2>
            <p>
              Projetos concluídos: <span>8</span>
            </p>
            <p>
              Projetos concluídos: <span>8</span>
            </p>
            <p>
              Projetos em Execução: <span>2</span>
            </p>
            <p>
              Projetos em disputa: <span>4</span>
            </p>
            <p>
              Classificação dos clientes: <span>8</span>
            </p>
          </div>
        </aside>
      </div>
      <div className="description">
        <h2>Descrição</h2>
        <p>
          Somos uma equipe de desenvolvimento focada sempre no melhor para
          nossos clientes. Trabalhamos com:- UI/UX Designer- Criação de Website-
          Social Media- Consultoria em Marketing- Criação de sistemas
        </p>
      </div>
      <div className="portfolio">
        <Button bgColor="#333">INTEGRAR PORTFÓLIO</Button>
        <div className="port">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="logOut">
        <Button bgColor="red">Sair da conta</Button>
        <Button bgColor="#333">Excluir conta</Button>
      </div>
      <Footer2 />
    </div>
  );
};

export default Profile;
