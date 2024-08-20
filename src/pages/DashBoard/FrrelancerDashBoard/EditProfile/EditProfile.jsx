import React, { useEffect, useRef, useState } from "react";
import DHeader from "../../DashboardHeader/DashboardHeader";

import "./EditProfile.css";
import ProfilPic from "../../../../assets/images/img1427.jpg";
import Button from "../../../../components/Button/Button";
import Footer2 from "../../../../components/Footer/Footer2/Footer2";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [user, setUser] = useState(null); // Initialize user state
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef(null);

  // Retrieve the user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUser(storedUserData);
    } else {
      // Redirect to login if no user data is found
      navigate("/dashboard");
    }
  }, [navigate]);

  // Destructure user data once it is loaded
  const { profileImageUrl } = user || {};

  if (!user) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  // Image to display instead of the default profile image and push to backend
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Display a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Change form input type
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Button for image upload
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <DHeader
        logoLink="/Dashboard"
        editProfile="/edit-profile"
        ProfileUrl={profileImageUrl}
      />
      <div className="edit-prof">
        <form action="">
          <div className="top">
            <div className="left-form">
              <h2>Editar Perfil</h2>
              <label htmlFor="">Título profissional</label>
              <input type="text" name="title" placeholder="Ex: UI Designer" />
              <label htmlFor="">Descrição</label>
              <textarea
                name=""
                id=""
                placeholder="Conte sobre você..."
              ></textarea>
            </div>
            <div className="right-form">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  // height: "100%",
                  width: "200px",
                  // gap: "2rem",
                }}
              >
                <input
                  type="file"
                  name="profile"
                  id="p"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <label htmlFor="p">
                  <img src={imagePreview || profileImageUrl} alt="Profile" />
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    disabled={isUploading}
                    style={{
                      width: "100%",
                      backgroundColor: "green",
                      marginTop: "2rem",
                    }}
                  >
                    {isUploading ? "Uploading..." : "Alterar Foto"}
                  </button>
                </label>
              </div>
            </div>
          </div>
          <label htmlFor="">Área de interesse</label>
          <input type="text " name="interest" placeholder="Ex: UI Designer" />
          <label htmlFor="">Habilidades</label>
          <input type="text" name="skill" id="" placeholder="Habilidades" />

          <Button bgColor="#D6B8FF">SALVAR ALTERAÇÕES</Button>
        </form>
      </div>
      <Footer2 />
    </>
  );
};

export default EditProfile;
