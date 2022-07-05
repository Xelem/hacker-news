import React, { createContext, useState } from "react";

export const IDContext = createContext();

const IDContextProvider = (props) => {
  const [id, setID] = useState("");

  return (
    <IDContext.Provider value={{ id, setID }}>
      {props.children}
    </IDContext.Provider>
  );
};

export default IDContextProvider;
