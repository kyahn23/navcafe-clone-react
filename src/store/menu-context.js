import React, { useState } from "react";

const MenuContext = React.createContext({
  curMenu: "",
  setBoard: (val) => {},
});

export const MenuContextProvider = (props) => {
  const [menu, setMenu] = useState(null);

  const menuChkHandler = (typ) => {
    setMenu(typ);
  };

  let currMenu = menu;

  const contextValue = {
    setBoard: menuChkHandler,
    curMenu: currMenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
