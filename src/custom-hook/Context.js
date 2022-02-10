import React, { useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => useContext(AppContext);

export default useGlobalContext;
