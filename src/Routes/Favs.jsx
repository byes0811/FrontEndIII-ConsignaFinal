import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  
  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    dispatch({ type: "SET_FAVORITOS", payload: favoritos });
  }, [dispatch]);


  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favoritos?.map((dentist) => {
          return (
            <Card
              key={dentist.id}
              name={dentist.fullName}
              id={dentist.id}
              username={dentist.username}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favs;
