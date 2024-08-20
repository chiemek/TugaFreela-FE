import Logo from "../../../assets/icons/new-logo.png";
import SearchIcon from "../../../assets/icons/searchIcon.png";
import NotificationIcon from "../../../assets/icons/notificationBell.png";
import MessageIcon from "../../../assets/icons/messageIcon.png";
import ProfilPic from "../../../assets/images/img1427.jpg";
import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const DashboardHeader = ({
  logoLink,
  dashboard,
  findJob,
  finance,
  editProfile,
  ProfileUrl,
}) => {
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleMessage, setToggleMessage] = useState(false);

  const handleNotification = () => {
    toggleMessage || setToggleNotification(!toggleNotification);
  };

  const handleMessage = () => {
    toggleNotification || setToggleMessage(!toggleMessage);
  };

  return (
    <div className="DashboardHeader">
      <Link to={logoLink}>
        <img src={Logo} alt="logo" className="img" />
      </Link>

      <nav>
        <ul>
          <li>
            <HashLink to={dashboard}>Meu Dashboard</HashLink>
          </li>
          <li>
            <Link to={findJob}>Encontre Jobs </Link>
          </li>
          <li>
            <Link to={finance}>Meus Financeiro</Link>
          </li>
          <li>
            <Link to="/FAQ">Ajuda</Link>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="buscar por profissionals" />
          <button>
            <img src={SearchIcon} alt="search button" />
          </button>
        </div>
        <div className="headerImages">
          <Link onClick={handleNotification}>
            <img
              src={NotificationIcon}
              alt="notification bell"
              className="img"
            />
          </Link>
          <Link onClick={handleMessage}>
            <img src={MessageIcon} alt="message icon" className="img" />
          </Link>
          <HashLink to={editProfile}>
            <img
              src={ProfileUrl}
              alt="profile picture"
              className="Profile-Pic"
            />
          </HashLink>
        </div>
        {toggleMessage && <Messages />}
        {toggleNotification && <Notification />}
      </nav>
    </div>
  );
};

export const Messages = () => {
  const message = [
    {
      image: ProfilPic,
      title: "Design de aplicativo de eventos e ...",
      message: "Olá, tudo bem? Me chamo Dayvid e sou freelancer ...",
    },
    {
      image: ProfilPic,
      title: "Design de aplicativo de eventos e ...",
      message: "Olá, tudo bem? Me chamo Dayvid e sou freelancer ...",
    },
    {
      image: ProfilPic,
      title: "Design de aplicativo de eventos e ...",
      message: "Olá, tudo bem? Me chamo Dayvid e sou freelancer ...",
    },
  ];

  return (
    <div className="messagess">
      <div className="messages">
        <h2>MENSAGENS</h2>
        <p>Ver todas</p>
      </div>
      {message.map((msg, index) => (
        <div className="message-title" key={index}>
          <div className="message-body">
            <img src={msg.image} alt="" />
            <div className="message-details">
              <p>{msg.title}</p>
              <p>{msg.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export const Notification = () => {
  const message = [
    {
      title: "A sua proposta foi aceita em um job",
      message: "Design de aplicativo de eventos e ...",
    },
    {
      title: "A sua proposta foi aceita em um job",
      message: "Design de aplicativo de eventos e ...",
    },
    {
      title: "A sua proposta foi aceita em um job",
      message: "Design de aplicativo de eventos e ...",
    },
  ];

  return (
    <div className="notifications">
      <div className="notification">
        <h2>NOTIFICAÇÕES</h2>
        <p>Ver todas</p>
      </div>
      {message.map((msg, index) => (
        <div className="message-title" key={index}>
          <div className="message-body">
            <div className="message-details">
              <p>{msg.title}</p>
              <p>{msg.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardHeader;
