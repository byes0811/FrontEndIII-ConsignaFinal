import React, { useEffect, createContext, useReducer } from "react";

const savedData = localStorage.getItem("appData");
const savedFavoritos = localStorage.getItem("favoritos");

const initialState = {
  theme: "light",
  data: savedData ? JSON.parse(savedData) : [],
  favoritos: savedFavoritos ? JSON.parse(savedFavoritos) : [],
};

export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favoritos: action.payload };    
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("appData", JSON.stringify(state.data));
  }, [state.data]);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
  }, [state.favoritos]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
