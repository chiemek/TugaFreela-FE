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
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";
import Footer2 from "../../../../components/Footer/Footer2/Footer2";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ClientProfile2 = () => {
  const [user, setUser] = useState(null); // Initialize user state
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

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
    id,
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
  console.log(id);
  const userId = id;

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
    setLoading(true); // Indicate that loading is in progress
    try {
      const token = localStorage.getItem("token");

      const response = await axios.delete(`${apiUrl}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Account deleted successfully!");
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        navigate("/login");
      } else {
        toast.error(response.data.error || "Error deleting account");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || err.message);
    } finally {
      setLoading(false); // Indicate that loading is complete
    }
  };

  const profile = [
    {
      name: "Paulo Santos",
      job: "Gestor de Projetos",
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
              <HashLink
                to="/edit-client-profile"
                style={{ textDecoration: "none", color: "black" }}
              >
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
              </HashLink>
            </aside>
          </div>
          <div className="description">
            <h2>Descrição</h2>
            <p>{description}</p>
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
              disabled={loading}
            >
              {loading ? "Deleting..." : " DELETAR"}
            </Button>
          </div>
        </div>
      )}
      <Footer2 />
    </div>
  );
};

export default ClientProfile2;
