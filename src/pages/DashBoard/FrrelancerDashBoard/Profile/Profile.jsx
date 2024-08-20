import React, { useEffect, useState } from "react";
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
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import "../../../../components/DeleteProfile/DeleteProfile";

const Profile = () => {
  const [user, setUser] = useState(null); // Initialize user state
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  // Function to handle modal opening
  const handleOpenModal = () => {
    setShowModal(true);
    console.log("Modal opened");
  };

  // handle modal closing
  const handleCloseModal = () => {
    setShowModal(false);
  };

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
    description,
    notifications,
    chat,
    skills,
  } = user || {};

  // console.log(description);

  if (!user) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  // handle logout
  const handleLogout = () => {
    // Clear user data and token from localStorage
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");

    localStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  // handle delete
  const handleDeleteAccount = async () => {
    const navigate = useNavigate();

    try {
      const token = localStorage.getItem("authToken");

      const response = await axios.delete("/api/users/delete-account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        // Account deletion successful
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        navigate("/login");
      } else {
        console.error("Error deleting account:", response.data.msg);
      }
    } catch (err) {
      console.error(
        "Error deleting account:",
        err.response?.data?.msg || err.message
      );
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(223, 225, 226)" }}>
      <Header ProfileUrl={profileImageUrl} />
      {!showModal && (
        <>
          <div className="profile-container">
            <aside className="first-left-aside">
              <div className="edit">
                <div className="set">
                  <img
                    src={profileImageUrl}
                    alt="profile picture"
                    className="profile"
                  />
                  <div className="testRate">
                    <h2>{firstName}</h2>

                    <p>{skills.join(" | ")}</p>
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
                    <p style={{ color: "#c06be8" }}>{level}</p>
                    <ProgressBar
                      currentProgress={level}
                      maxProgress={100}
                      style={{ color: "#000" }}
                    />
                  </div>
                </div>
                <HashLink to="/edit-profile">
                  <p style={{ color: "#c06be8", cursor: "pointer" }}>
                    Editar Perfil
                  </p>
                </HashLink>
              </div>
              <div className="feedback">
                <h2>Feedback dos clientes</h2>

                <div className="feedback-card">
                  {customerFeedback.map((items, index) => {
                    return (
                      <div className="feedback-clients" key={index}>
                        <div
                          key={index}
                          style={{ display: "flex", gap: "1rem" }}
                        >
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
                  {areaOfInterest.map((interest, index) => (
                    <p key={index}>{interest}</p>
                  ))}
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
                  Projetos concluídos: <span>{projectCompleted}</span>
                </p>

                <p>
                  Projetos em Execução: <span>{executingProjects}</span>
                </p>
                <p>
                  Projetos em disputa: <span>{projectsInDespute}</span>
                </p>
                <p>
                  Classificação dos clientes: <span>{customerRating}</span>
                </p>
              </div>
            </aside>
          </div>
          <div className="description">
            <h2>Descrição</h2>
            <p>{description}</p>
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
            <Button bgColor="red" onClick={handleLogout}>
              Sair da conta
            </Button>
            <Button bgColor="#333" onClick={handleOpenModal}>
              Excluir conta
            </Button>
          </div>
        </>
      )}
      {showModal && (
        <div className="modal-delete">
          <div className="pop-up-delete">
            <div className="body">
              <p>Certeza que deseja deletar a sua conta definitivamente?</p>
              <p style={{ fontSize: ".8rem" }}>
                Lembre-se que ao deletar a sua conta não sera possível utilizar
                novamente suas informações para cadastro.
              </p>
            </div>

            <Button
              bgColor="#C10505"
              font=".7rem"
              width="9rem"
              onClick={handleDeleteAccount}
            >
              DELETAR
            </Button>
          </div>
        </div>
      )}{" "}
      <Footer2 />
    </div>
  );
};

export default Profile;
