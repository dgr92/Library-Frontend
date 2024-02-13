import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProviderContext = ({ children }) => {
  const [library, setLibrary] = useState([]);

  return (
    <LibraryContext.Provider value={{ library, setLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};