import React, { useState, createContext } from "react";

export const ErrorContext = createContext<any>("");

type Props = {
  children: React.ReactNode;
};

export const ErrorProvider = ({ children }: Props) => {
  const [err, setErr] = useState("");

  return (
    <ErrorContext.Provider value={[err, setErr]}>
      {children}
    </ErrorContext.Provider>
  );
};
