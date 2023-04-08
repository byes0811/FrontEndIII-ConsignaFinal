import React, { useContext, useState, useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
      setIsLoading(false);
    };
    fecthData();
  }, [dispatch]);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          state.data && state.data.map((dentist) => (
            <Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username} />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
