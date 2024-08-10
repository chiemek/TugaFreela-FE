import React, { useState } from "react";
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

import "./Dashboard.css";

export const ProgressBar = ({ currentProgress, maxProgress }) => {
  const progressPercentage = (currentProgress / maxProgress) * 100;

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="progress-text">
          {currentProgress}/{maxProgress}
        </div>
      </div>
    </>
  );
};

const DashBoard = () => {
  const subHeader = [
    {
      image: MoneyBag,
      amount: `R$${8000}`,
      description: "Seus ganhos",
    },
    {
      image: Justice,
      amount: 458,
      description: "Propostas enviadas",
    },
    {
      image: Check,
      amount: 7,
      description: "Propostas aceitas",
    },
    {
      image: View,
      amount: 1854,
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
      Status: " Aguardando Pagamento",
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
  return (
    <>
      <DHeader />
      <div className="freelancerDashboard">
        <div className="subHeader">
          {subHeader.map((item, index) => (
            <div className="card" key={index}>
              <div className="img-container">
                <img src={item.image} alt={item.image.name} />
              </div>
              <div className="desc-container">
                <div className="amount">{item.amount}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <section>
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
                    <h3>Julian Dalsin</h3>
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <img key={index} src={Star} alt="" />
                      ))}
                    <p>10</p>
                  </div>
                  <Button bgColor={"#D6B8FF"}>ENCONTRAR JOB</Button>
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
                  <Button bgColor={"#FFC107"}>ENCONTRAR JOB</Button>
                </div>
              </div>
              <div className="details2">
                <ProgressBar currentProgress={50} maxProgress={200} />
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
                  <img src={job.image} alt={job.image.name} className="doc" />
                  <div className="job-type">
                    <div className="topic">
                      <p>{job.appName}</p>
                    </div>
                    <div className="center">
                      <p>Propostas({job.Propostas})</p>
                      <p>Cliente: {job.Cliente}</p>
                      <p>Início: {job.Início}</p>
                    </div>

                    <div className="edit">
                      <p>Status: {job.Status}</p>
                    </div>
                  </div>
                  <img src={Edit} alt={job.image.name} className="threeDots" />
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </>
  );
};

export default DashBoard;
