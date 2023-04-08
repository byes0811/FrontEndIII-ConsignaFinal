import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setIsFavorite(favoritos.some((dentist) => dentist.id === id));
  }, [id]);

  const addFav = (dentistName, dentistUserName, dentistId) => {
    // Aqui iria la logica para agregar la Card en el localStorage

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const dentist = { name: dentistName, username: dentistUserName, id: dentistId };
    const index = favoritos.findIndex((d) => d.id === dentistId);
  
    if (index > -1) {
      favoritos.splice(index, 1);
      setIsFavorite(false);
    } else {
      favoritos.push(dentist);
      setIsFavorite(true);
    }
  
    dispatch({ type: "ADD_FAVORITE", payload: favoritos });
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  };

  return (
    <div className={state.theme === "light" ? "card" : "card-dark"}>
      <Link to={`detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img src="./images/doctor.jpg" alt="Doctor" width="150px" />
        <h3>{name}</h3>
        <h3>{username}</h3>
        <h3>{id}</h3>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={() => addFav(name, username, id)} className="favButton">
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default Card;
