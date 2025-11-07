import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(undefined);

export function AppContextProvider({ children }) {
  const [title, setTitle] = useState({
    header:"Sign Up Now!",
    caption:"Create an account to join react note explorer"
  });
  // useMemo expects a factory function as the first argument
  const contextValue = useMemo(() => ({ title, setTitle }), [title]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    // Throw a proper Error (capital E)
    throw new Error("useApp must be used within AppContext");
  }
  return context;
};
