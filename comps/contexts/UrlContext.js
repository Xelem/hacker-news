import { createContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [baseUrl, setBaseUrl] = useState(
    "https://hn.algolia.com/api/v1/search?tags=front_page"
  );
  return <Context.Provider>{children}</Context.Provider>;
};

export default Provider;
