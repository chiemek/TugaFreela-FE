import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header/Header";
import Footer2 from "../../../components/Footer/Footer2/Footer2";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../../assets/images/photoIcon.png";
import { toast } from "react-toastify";
import "./CombinedForm.css";

// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

const CombinedForm = () => {
  const [formState, setFormState] = useState({
    role: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    address: "",
    postalCode: "",
    state: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    id: "",
    title: "",
    description: "",
    rate: "",
    nif: "",
    citizenCard: "",
    categories: ["", ""],
    profileImageUrl: "",
    profileImagePublicId: "",
  });

  const [showForm, setShowForm] = useState("basic");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(Profile);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState({ phone: "", email: "" });
  const [otpErrors, setOtpErrors] = useState({ phone: "", email: "" });
  const [otpSent, setOtpSent] = useState({ phone: false, email: false });

  const fileInputRef = useRef(null);
  const maxWords = 500;
  const navigate = useNavigate();

  // Reset form function that uses initialFormState
  const resetForm = () => {
    setFormState(formState);
    setErrors({});
    setOtp({ phone: "", email: "" });
    setOtpErrors({ phone: "", email: "" });
    setOtpSent({ phone: false, email: false });
    setTermsAccepted(false);
    setSelectedFile(null);
    setImagePreview(null);
  };

  // Debounce hook
  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  useEffect(() => {
    if (
      showForm === "basic" ||
      showForm === "freelancer" ||
      showForm === "client"
    ) {
      resetForm(); // Reset the form state whenever the form is displayed

      // Clear any potentially saved values in local storage
      window.onload = function () {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      };

      return () => {
        // Clean up on component unmount
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      };
    }
  }, [showForm]);

  useEffect(() => {
    resetForm(); // Reset form state on component mount

    // Clear any potentially saved values in local storage
    window.onload = function () {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    };

    return () => {
      // Clean up on component unmount
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    };
  }, []);

  // Validation functions
  // const validatePhoneNumber = (phoneNumber) => /^\d{9}$/.test(phoneNumber);
  const validateEmail = (email) => emailRegex.test(email);

  // Change form input type
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
  };

  // Change role
  const handleRoleChange = (e) => {
    const role = e.target.value;
    setFormState((prevState) => ({
      ...prevState,
      role: role,
    }));
    validateField("role", role); // Updated: Validate role on change
  };

  // Trim description field
  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/);
    if (words.length <= maxWords) {
      setFormState((prevState) => ({
        ...prevState,
        description: text,
      }));
    } else {
      const trimmedText = words.slice(0, maxWords).join(" ");
      setFormState((prevState) => ({
        ...prevState,
        description: trimmedText,
      }));
    }
  };

  // Validate input fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = {}; // Updated: Initialize new errors object

    // Check required fields
    const requiredFields = [
      "role",
      "phoneNumber",
      "email",
      "dateOfBirth",
      "address",
      "postalCode",
      "state",
      "password",
      "confirmPassword",
    ];

    requiredFields.forEach((field) => {
      if (!formState[field]) {
        toast.error(`${field.replace(/([A-Z])/g, " $1")} is required.`);
        newErrors[field] = `${field.replace(/([A-Z])/g, " $1")} is required.`; // Comment: Added validation for new fields
        isValid = false;
      }
    });

    // Specific field validation
    if (!emailRegex.test(formState.email)) {
      toast.error("Invalid email format");
      newErrors.email = "Invalid email format"; // Updated: Email format error
      isValid = false;
    }

    if (!passwordRegex.test(formState.password)) {
      toast.error(
        "Password must be at least 8 characters long, include one letter, one number, and one special character"
      );
      newErrors.password =
        "Password must be at least 8 characters long, include one letter, one number, and one special character"; // Updated: Password format error

      isValid = false;
    }

    if (formState.password !== formState.confirmPassword) {
      toast.error("Passwords do not match");
      newErrors.confirmPassword = "Passwords do not match"; // Updated: Password mismatch error
      isValid = false;
    }

    if (!termsAccepted) {
      toast.error("You must accept the terms and conditions.");
      newErrors.terms = "You must accept the terms and conditions."; // Updated: Terms acceptance error
      isValid = false;
    }

    setErrors(newErrors); // Updated: Set errors state
    return isValid;
  };

  const validateField = (fieldName, value) => {
    let newErrors = { ...errors }; // Updated: Validate individual field

    if (!value) {
      newErrors[fieldName] = `${fieldName.replace(
        /([A-Z])/g,
        " $1"
      )} is required.`; // Updated: Error for empty fields
    } else {
      delete newErrors[fieldName];
      if (fieldName === "email" && !emailRegex.test(value)) {
        newErrors.email = "Invalid email format"; // Updated: Email format validation
      }
      if (fieldName === "password" && !passwordRegex.test(value)) {
        newErrors.password =
          "Password must be at least 8 characters long, include one letter, one number, and one special character"; // Updated: Password format validation
      }
      if (fieldName === "confirmPassword" && value !== formState.password) {
        newErrors.confirmPassword = "Passwords do not match"; // Updated: Confirm password validation
      }
    }

    setErrors(newErrors); // Updated: Set errors state
  };

  const validateOtp = async (type) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const endpoint = `${apiUrl}/verify-otp`;
    const data = {
      identifier: formState[type === "phone" ? "phoneNumber" : "email"],
      otp: otp[type],
      type: type === "phone" ? "sms" : "email",
    };
    try {
      const response = await axios.post(endpoint, data);
      if (response.data && response.data.message) {
        toast.success(response.data.message);
      } else {
        toast.success(`OTP for ${type} verified successfully`);
      }
      return true;
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error(`Failed to verify ${type} OTP`);
      }
      return false;
    }
  };

  // handle next
  const handleNext = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check if email OTP was sent
    if (formState.email && !otpSent.email) {
      toast.error("Email OTP not sent");
      return;
    }

    // Verify email OTP
    if (formState.email && otpSent.email) {
      if (!otp.email) {
        toast.error("Please enter the email OTP");
        return;
      }

      try {
        const isValid = await validateOtp("email");
        if (!isValid) {
          return;
        }
      } catch (error) {
        console.error("Error verifying email OTP:", error);
        return;
      }
    }

    // If we've reached this point, the email OTP is valid (or not required)
    setShowForm(formState.role);
  };

  // Skip button for client
  const handleSkip = async (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL; // Access environment variable

    const endpoint = `${apiUrl}/signup-clientSkip`;

    try {
      const response = await axios.post(endpoint, {
        ...formState,
        firstName: null,
        lastName: null,
        id: null,
        title: null,
        description: null,
        rate: null,
        nif: null,
        citizenCard: null,
      });
      console.log("Response:", response.data);
      toast.success("Registration skipped and saved successfully!");
      navigate("/");
      setFormState({
        role: "",
        phoneNumber: "",
        email: "",
        dateOfBirth: "",
        address: "",
        postalCode: "",
        state: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        id: "",
        title: "",
        description: "",
        rate: "",
        nif: "",
        citizenCard: "",
        categories: ["", ""],
        profileImageUrl: "",
        profileImagePublicId: "",
      });
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Registration failed. Please try again.");
    }
  };

  // Terms and condition checkbox
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
    validateField("terms", e.target.checked); // Updated: Validate terms acceptance
  };

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

  const handleRoleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    let endpoint = "";

    if (showForm === "client") {
      endpoint = `${import.meta.env.VITE_API_URL}/signup-client`;
    } else if (showForm === "freelancer") {
      endpoint = `${import.meta.env.VITE_API_URL}/signup-freelancer`;
    } else {
      toast.error("Invalid role");
      return;
    }

    // Create a FormData object to handle file and form data
    const formData = new FormData();

    // Append form fields
    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

    // Append selected file if it exists
    if (selectedFile) {
      formData.append("profilePicture", selectedFile);
    }

    try {
      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      toast.success("Registration successful!");
      setFormState({
        role: "",
        phoneNumber: "",
        email: "",
        dateOfBirth: "",
        address: "",
        postalCode: "",
        state: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        id: "",
        title: "",
        description: "",
        rate: "",
        nif: "",
        citizenCard: "",
        categories: ["", ""],
        profileImageUrl: "",
        profileImagePublicId: "",
      });
      setTimeout(() => {
        showForm === "client"
          ? navigate("/client-dashboard")
          : navigate("/Login");
      }, 100); // 100 milliseconds delay
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("Registration failed. Please try again.");
    }
  };

  // Button for image upload
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // handleOtp
  const sendOtp = async (type) => {
    const apiUrl = import.meta.env.VITE_API_URL; // Ensure VITE_API_URL is set correctly in your environment variables
    const endpoint =
      type === "phone" ? `${apiUrl}/send-sms-otp` : `${apiUrl}/send-email-otp`;

    // Prepare data to be sent in the request body
    const data = {
      [type === "phone" ? "phoneNumber" : "email"]: formState[type], // Dynamically setting either phoneNumber or email
    };

    try {
      // Sending POST request to the appropriate endpoint
      await axios.post(endpoint, data);
      toast.success(`OTP sent to ${type}`);

      // Update state to indicate OTP has been sent
      setOtpSent((prev) => ({ ...prev, [type]: true }));
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Failed to send OTP to ${type}`);
    }
  };

  // // Automatically send OTP when phone number is valid and not yet sent
  // useEffect(() => {
  //   if (validatePhoneNumber(formState.phoneNumber) && !otpSent.phone) {
  //     sendOtp("phone");
  //   }
  // }, [formState.phoneNumber]);
  window.onload = function () {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  // Debounced email value
  const debouncedEmail = useDebounce(formState.email, 500); // 500ms debounce delay

  // Automatically send OTP when email is valid and not yet sent
  useEffect(() => {
    if (validateEmail(formState.email) && !otpSent.email) {
      sendOtp("email");
    }
  }, [debouncedEmail, otpSent.email]);

  return (
    <>
      <Header />
      <div className={"containerForm"}>
        <form
          onSubmit={showForm === "basic" ? handleNext : handleRoleFormSubmit}
          className="basic-form"
          autoComplete="off"
        >
          {showForm === "basic" && (
            <div className="container">
              <h2>
                Bem-vindo ao <br /> <span>TugaFreela</span>
              </h2>
              <p>
                Please provide your basic information to create an account.
                Based on your role, you will be prompted to provide additional
                details.
              </p>
              {errors.role && (
                <p
                  style={{
                    margin: "0",
                    fontSize: "1rem",
                    color: "red",
                  }}
                >
                  {errors.role}
                </p>
              )}
              <div
                className="radio"
                style={{
                  display: "flex",
                  width: "100%",
                  paddingInline: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="ray"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    name="role"
                    id="client"
                    value="client"
                    checked={formState.role === "client"}
                    onChange={handleRoleChange}
                    className="ray"
                    style={{
                      marginRight: ".5rem",
                    }}
                  />
                  <label htmlFor="client">Cliente</label>
                </div>
                <div
                  className="ray"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    name="role"
                    id="freelancer"
                    value="freelancer"
                    checked={formState.role === "freelancer"}
                    onChange={handleRoleChange}
                    style={{
                      marginRight: ".5rem",
                    }}
                  />
                  <label htmlFor="freelancer">Freelancer</label>
                </div>
              </div>
              <div className="phone">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    marginRight: "2rem",
                  }}
                >
                  {errors.phoneNumber && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      must have (+351 ) or other country code
                    </p>
                  )}
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phone"
                    value={formState.phoneNumber}
                    placeholder="Telefone 920 *** ***"
                    onChange={handleInputChange}
                    style={{
                      marginRight: "2rem",
                      width: "100%",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "50%",
                  }}
                >
                  {errors.phoneNumberOTP && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      invalid OTP
                    </p>
                  )}
                  <input
                    type="text"
                    name="phoneNumberOtp"
                    id="phoneOtp"
                    placeholder="Phone OTP"
                    value={otp.phone}
                    onChange={(e) =>
                      setOtp((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="email">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "50%",
                    marginRight: "2rem",
                  }}
                >
                  {errors.email && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      invalid Email
                    </p>
                  )}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={formState.email}
                    onChange={handleInputChange}
                    style={{ marginRight: "2rem", width: "100%" }}
                    autoComplete="off" // Prevent browser autofill
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "50%",
                  }}
                >
                  {errors.emailOTP && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      invalid OTP
                    </p>
                  )}
                  <input
                    type="email"
                    name="emailOtp"
                    id="emailOtp"
                    placeholder="Email OTP"
                    value={otp.email}
                    onChange={(e) =>
                      setOtp((prev) => ({ ...prev, email: e.target.value }))
                    }
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                className="ddoobb"
              >
                <div>
                  <label
                    htmlFor=""
                    className="dob-c"
                    style={{ fontSize: ".8rem" }}
                  >
                    Date of Birth
                  </label>
                  {errors.dateOfBirth && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      Empty date
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  placeholder="Data de nascimento"
                  value={formState.dateOfBirth}
                  onChange={handleInputChange}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text";
                  }}
                  style={{ width: "100%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginRight: "2rem",
                }}
              >
                {errors.address && (
                  <p
                    style={{
                      margin: "0",
                      fontSize: ".7rem",
                      color: "red",
                    }}
                  >
                    Empty Morada field
                  </p>
                )}
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Morada"
                  value={formState.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="city">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "50%",
                    marginRight: "2rem",
                  }}
                >
                  {errors.postalCode && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      Empty Código Postal field
                    </p>
                  )}
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="Código Postal"
                    value={formState.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "50%",
                  }}
                >
                  {errors.state && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                      }}
                    >
                      Empty Distrito
                    </p>
                  )}

                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Distrito"
                    value={formState.state}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "50%",
                    marginRight: "2rem",
                  }}
                >
                  {errors.password && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".5rem",
                        color: "red",
                        textAlign: "left",
                      }}
                    >
                      Invalid Password must contain character,number,text,
                      uppercase
                    </p>
                  )}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Senha"
                    value={formState.password}
                    onChange={handleInputChange}
                    style={{ width: "100%" }}
                    autoComplete="off" // Prevent browser autofill
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "50%",
                  }}
                >
                  {errors.confirmPassword && (
                    <p
                      style={{
                        margin: "0",
                        fontSize: ".7rem",
                        color: "red",
                        marginBottom: ".5rem",
                      }}
                    >
                      Password dont match
                    </p>
                  )}
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirme a senha"
                    value={formState.confirmPassword}
                    onChange={handleInputChange}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              {errors.terms && (
                <p
                  style={{
                    margin: "0",
                    fontSize: ".7rem",
                    color: "red",
                  }}
                >
                  {errors.terms}
                </p>
              )}
              <div className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={termsAccepted}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="terms">
                  Aceito os <Link to="/Terms">Termos de Serviço</Link>
                </label>
              </div>
              <button type="submit" onClick={handleNext}>
                Next
              </button>
            </div>
          )}

          {showForm === "client" && (
            <div className="combined-form">
              <p
                id="skip"
                onClick={handleSkip}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Skip
              </p>

              <div className="name">
                <input
                  type="text"
                  name="firstName"
                  id="Nome"
                  placeholder="Nome"
                  value={formState.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  id="Apelido"
                  placeholder="Apelido"
                  value={formState.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="id, passport or any form of identification"
                value={formState.id}
                onChange={handleInputChange}
              />

              <input
                type="file"
                name="profile"
                id="p"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="p" className="file">
                <img src={imagePreview || Profile} alt="Profile" />
                <button
                  type="button"
                  onClick={handleButtonClick}
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Add Photo"}
                </button>
              </label>

              <textarea
                name="description"
                id="desc"
                value={formState.description}
                onChange={handleDescriptionChange}
                rows="4"
                cols="50"
                placeholder="Descrição"
              >
                Descrição
              </textarea>
              <div className="counter">
                {formState.description.split(/\s+/).length}/{maxWords} words
              </div>

              <button type="submit">Submit</button>
            </div>
          )}

          {showForm === "freelancer" && (
            <div className="combined-form">
              <div className="name">
                <input
                  type="text"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleInputChange}
                  placeholder="Nome"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleInputChange}
                  placeholder="Apelido"
                />
              </div>
              <input
                type="text"
                name="nif"
                value={formState.nif}
                onChange={handleInputChange}
                placeholder="NIF"
              />
              <input
                type="text"
                name="citizenCard"
                value={formState.citizenCard}
                onChange={handleInputChange}
                placeholder="Cartão de Cidadão"
              />
              <input
                type="file"
                name="profile"
                id="p"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="p" className="file">
                <img src={imagePreview || Profile} alt="Profile" />
                <button
                  type="button"
                  onClick={handleButtonClick}
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Add Photo"}
                </button>
              </label>
              <div className="cat">
                <div className="cat-div">
                  <label htmlFor="categories" style={{ display: "block" }}>
                    Categories:
                  </label>
                  <select
                    name="categories"
                    value={formState.categories[0] || ""}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        categories: [e.target.value],
                      }))
                    }
                  >
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div className="cat-div">
                  <label htmlFor="categories" style={{ display: "block" }}>
                    sub-Categories
                  </label>
                  <select
                    name="categories"
                    value={formState.categories[1] || ""}
                    onChange={(e) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        categories: [prevState.categories[0], e.target.value],
                      }))
                    }
                  >
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
              </div>
              <textarea
                name="description"
                value={formState.description}
                onChange={handleDescriptionChange}
                rows="4"
                cols="50"
                placeholder="Descrição"
              />
              <div className="counter">
                {formState.description.split(/\s+/).length}/{maxWords} words
              </div>
              <input
                type="text"
                name="rate"
                value={formState.rate}
                onChange={handleInputChange}
                placeholder="Taxa/hora"
              />
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      </div>
      <Footer2 />
    </>
  );
};

export default CombinedForm;
