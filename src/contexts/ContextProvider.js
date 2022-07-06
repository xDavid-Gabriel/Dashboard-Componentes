import { createContext, useContext, useState } from "react";

const StateContext = createContext();


  /* Esto puede servir para crear modales */

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  
    /* Esto puede servir para crear modales */
  
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const [screenSize, setScreenSize] = useState(undefined);
  /*Tema de colores y modo Dark*/
  // Modo Dark
  const [currentMode, setCurrentMode] = useState("Light");
  // Tema de colores
  const [currentColor, setCurrentColor] = useState("#03C9D7");

  //Este themeSettings sirve para activar el menu de opciones de modo dark y colores
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    // este e.target.value sirve cuando se usa el input check
    setCurrentMode(e.target.value);
 console.log(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false)
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false)
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        initialState,
        handleClick,
        screenSize,
        setScreenSize,
        //Tema de colores y modo Dark
        // Modo Dark
        currentMode,
        setCurrentMode,
        // Tema de colores
        currentColor,
        setCurrentColor,
        //Este themeSettings y setThemeSettings sirve para activar el menu de opciones de modo dark y colores
        themeSettings,
        setThemeSettings,
        setMode,
        setColor
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
