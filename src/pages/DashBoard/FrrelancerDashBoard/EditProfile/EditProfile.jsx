import React, { useEffect, useRef, useState } from "react";
import DHeader from "../../DashboardHeader/DashboardHeader";
import "./EditProfile.css";
import Button from "../../../../components/Button/Button";
import Footer2 from "../../../../components/Footer/Footer2/Footer2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { set } from "react-hook-form";

const EditProfile = () => {
  const [user, setUser] = useState(null); // Initialize user state
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [description, setDescription] = useState("");

  const fileInputRef = useRef(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  // Retrieve the user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUser(storedUserData);
      setImagePreview(storedUserData.profileImageUrl || "");
    } else {
      navigate("/dashboard"); // Redirect if no user data is found
    }
  }, [navigate]);

  const { profileImageUrl, id } = user || {};

  if (!user) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  // Handle file input change
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

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "skills":
        setSkills(value);
        break;
      case "areaOfInterest":
        setAreaOfInterest(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  // Button for image upload
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // handle submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const userId = id;

      const formData = new FormData();
      if (selectedFile) {
        formData.append("profilePic", selectedFile);
      }
      formData.append("title", title);
      formData.append("skills", skills);
      formData.append("areaOfInterest", areaOfInterest);
      formData.append("description", description);

      const response = await axios.put(`${apiUrl}/user/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("User updated successfully!");

        const updatedUser = response.data.user;

        // Retrieve current data from localStorage
        const currentUserData =
          JSON.parse(localStorage.getItem("userData")) || {};

        // Merge the updated fields with the existing data
        const mergedUserData = {
          ...currentUserData,
          ...updatedUser,
          // Alternatively, you could use Object.assign:
          // Object.assign({}, currentUserData, updatedUser)
        };

        // Save merged data to localStorage
        localStorage.setItem("userData", JSON.stringify(mergedUserData));

        // Update the state with new user data
        setUser(mergedUserData);
        setImagePreview(
          mergedUserData.profilePic || currentUserData.profilePic
        );
        setUser(updatedUser);
        setImagePreview(updatedUser.profilePic);
      } else {
        toast.error(response.data.error || "Error updating user");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DHeader
        logoLink="/Dashboard"
        editProfile="/edit-profile"
        ProfileUrl={imagePreview || profileImageUrl}
      />
      <div className="edit-prof">
        <form onSubmit={handleUpdate}>
          <div className="top">
            <div className="left-form">
              <h2>Editar Perfil</h2>
              <label htmlFor="title">Título profissional</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                placeholder="Ex: UI Designer"
              />
              <label htmlFor="description">Descrição</label>
              <textarea
                name="description"
                value={description}
                onChange={handleInputChange}
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
                  width: "200px",
                }}
              >
                <input
                  type="file"
                  name="profilePic"
                  id="p"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <label htmlFor="p">
                  <img
                    src={imagePreview || profileImageUrl}
                    alt="Profile"
                    style={{ width: "100%", borderRadius: "50%" }}
                  />
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    disabled={loading}
                    style={{
                      width: "100%",
                      backgroundColor: "green",
                      color: "#fff",
                      marginTop: "2rem",
                      border: "none",
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    {loading ? "Uploading..." : "Alterar Foto"}
                  </button>
                </label>
              </div>
            </div>
          </div>
          <label htmlFor="areaOfInterest">Área de interesse</label>
          <input
            type="text"
            name="areaOfInterest"
            value={areaOfInterest}
            onChange={handleInputChange}
            placeholder="Ex: UI Designer"
          />
          <label htmlFor="skills">Habilidades</label>
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={handleInputChange}
            placeholder="Habilidades"
          />
          <Button bgColor="#D6B8FF" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </div>
      <Footer2 />
    </>
  );
};

export default EditProfile;
