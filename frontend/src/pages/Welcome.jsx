import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Titulo from "../components/Titulo";
import './Welcome.css';  
const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="welcome-container">
      <Titulo titulo="Bienvenido a TecnoMarket" />
      <div className="card">
        <p className="mb-6 text-gray-700">
          ¡Gracias por ingresar a nuestra tienda!
        </p>

        <Button type="button" onClick={handleAccept} text="Aceptar" />
      </div>
    </div>
  );
};

export default Welcome;
