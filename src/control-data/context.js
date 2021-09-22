import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./handleState";

const store = createContext(initialState);
export const useStore = () => useContext(store);

 const StoreProvider = ({ children }) => (
  <store.Provider value={useReducer(reducer, initialState)}>
    {children}
  </store.Provider>
);
export default StoreProvider;