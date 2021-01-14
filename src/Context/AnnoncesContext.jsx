import React, { createContext, useState } from 'react';

export const AnnoncesContext = createContext({
  annonces: [],
  setAnnonces: () => {},
});

AnnoncesContext.displayName = 'AnnoncesContext';

const AnnoncesProvider = ({ children }) => {
  const [annonces, setAnnonces] = useState([]);

  return (
    <AnnoncesContext.Provider value={{ annonces, setAnnonces }}>
      {children}
    </AnnoncesContext.Provider>
  );
};

export default AnnoncesProvider;
