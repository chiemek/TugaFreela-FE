import "./Index.css";
import { ModalProvider } from "../public/ModalContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Change from "./pages/Password/Change/Change";
import Confirm from "./pages/Password/Confirm/Confirm";
import Email from "./pages/Password/Email/Email";
import Privacy from "./pages/Privacy/Privacy";
import Basic from "./pages/SignUp/Basic/Basic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/DashBoard/FrrelancerDashBoard/Profile/Profile";
import Terms from "./pages/Terms/Terms";
import ContactUs from "./pages/ContactUs/ContactUs";
import Freelance from "./pages/Freelance/Freelance";
import FAQ from "./pages/FAQ/FAQ";
import ThankYou from "./pages/Password/ThankYou/ThankYou";
import NotFound from "./components/NotFound/NotFound";
import FreelancerDashboard from "./pages/DashBoard/FrrelancerDashBoard/Dashboard/DashBoard";
import EditProfile from "./pages/DashBoard/FrrelancerDashBoard/EditProfile/EditProfile";
import ClientDashboard from "./pages/DashBoard/ClientDashBoard/ClientDashboard/ClientDashboard";
import ClientProfile from "./pages/DashBoard/ClientDashBoard/ClientDashboard/ClientProfile/ClientProfile";
import ClientCompleted from "./pages/DashBoard/ClientDashBoard/ClientCompleted/ClientCompleted";
import ClientProfile2 from "./pages/DashBoard/ClientDashBoard/ClientProfile2/ClientProfile2";
import EditClientProfile from "./pages/DashBoard/ClientDashBoard/ClientDashboard/ClientProfile/EditClientProfile/EditClientProfile";
import DeleteProfile from "./components/DeleteProfile/DeleteProfile";
import EditProfilePopUp from "./components/EditProfilePopUp/EditProfilePopUp";
import { UserProvider } from "./pages/Contexts/UserContext";
import PurchasePopUp from "./components/PurchasePopUp/PurchasePopUp";

function App() {
  return (
    <UserProvider>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change" element={<Change />} />
          <Route path="/forgot-password" element={<Email />} />
          <Route path="/reset-password/:token" element={<Change />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<FreelancerDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/client-profile" element={<ClientProfile />} />
          <Route path="/client-completed" element={<ClientCompleted />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/client-profile2" element={<ClientProfile2 />} />
          <Route path="/delete-profile" element={<DeleteProfile />} />
          <Route path="/edit-profile-popup" element={<EditProfilePopUp />} />
          <Route path="/edit-client-profile" element={<EditClientProfile />} />
          <Route path="/PurchasePopUp" element={<PurchasePopUp />} />
        </Routes>
      </ModalProvider>
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
