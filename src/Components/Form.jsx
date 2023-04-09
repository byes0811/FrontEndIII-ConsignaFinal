import React, { useState } from "react";
import "../styles/Form.css";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los datos del formulario antes de enviar
    if (formData.name.length <= 5 || !formData.email.includes("@")) {
      setErrorMessage("Por favor verifique su información nuevamente");
    } else {
      setSuccessMessage(
        `Gracias ${formData.name}, te contactaremos lo antes posible vía mail`
      );
      setErrorMessage("");
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="contact-container">
      <h1>Contacta con nosotros</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
      {successMessage && (
        <div className="success-message">
          Gracias {formData.name}, te contactaremos cuanto antes vía mail.
        </div>
      )}
    </div>
  );
};

export default Form;
