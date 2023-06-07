import { useState, createContext } from "react";
export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const [ user, setUser ] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}