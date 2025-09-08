import React, { useContext } from "react";
import Context from "./Cont";

const Button = () => {
  const { theme, toggleTheme } = useContext(Context);

  return (
    <button
      style={{
        backgroundColor: theme === "light" ? "#35ff03ff" : "#000000ff",
        color: theme === "light" ? "#000000" : "#02ff52ff" ,
      }}
      onClick={toggleTheme}
    >
      Toogle Theme
    </button>
  );
};

export default Button;
