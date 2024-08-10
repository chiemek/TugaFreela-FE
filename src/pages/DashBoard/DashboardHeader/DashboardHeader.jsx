import Logo from "../../../assets/icons/new-logo.png";
import SearchIcon from "../../../assets/icons/searchIcon.png";
import NotificationIcon from "../../../assets/icons/notificationBell.png";
import MessageIcon from "../../../assets/icons/messageIcon.png";
import ProfilPic from "../../../assets/images/img1427.jpg";
import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const DashboardHeader = () => {
  return (
    <div className="DashboardHeader">
      <Link to="/FreelancerDashboard">
        <img src={Logo} alt="logo" className="img" />
      </Link>

      <nav>
        <ul>
          <li>
            <HashLink to="/FreelancerDashboard">Meu Dashboard</HashLink>
          </li>
          <li>
            <Link to="/Jobs">Encontre Jobs </Link>
          </li>
          <li>
            <Link to="/Statement">Meus Financeiro</Link>
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
          <Link>
            <img
              src={NotificationIcon}
              alt="notification bell"
              className="img"
            />
          </Link>
          <Link>
            <img src={MessageIcon} alt="message icon" className="img" />
          </Link>
          <Link>
            <img
              src={ProfilPic}
              alt="profile picture"
              className="Profile-Pic"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
