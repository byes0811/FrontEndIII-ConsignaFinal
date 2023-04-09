import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [singleDentist, setSingleDentist] = useState({});
  const paramsForDentist = useParams();

  useEffect(() => {
    const getSingleDentist = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users/" + paramsForDentist.id);
      const json = await data.json();
      setSingleDentist(json);
    };
  
    getSingleDentist();
  }, [paramsForDentist.id]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>{singleDentist.name}</p>
      <p>{singleDentist.email}</p>
      <p>{singleDentist.phone}</p>
      <p>{singleDentist.website}</p>
    </>
  );
};

export default Detail;
