import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

const{state, dispatch} = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/contact">Contact us</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar