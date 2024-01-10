import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [main, setMain] = useState('foryou');

  return (
    <CategoryContext.Provider value={{ main, setMain }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useMainContext = () => {
    const context = useContext(CategoryContext);
    if (!context) {
      throw new Error('useMainContext must be used within a MainProvider');
    }
    return context;
  };