import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
export const ToastContext = createContext();

export const ToastContextProvider = (props) => {
  const notifications = [
    {
      id: uuidv4(),
      type: "SUCCESS",
      title: "Successfully fetched data",
      message: "Successfully retrieved all posts ",
    },
  ];
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return state;
      case "DELETE_NOTIFICATION":
        return state;
      default:
        return state;
    }
  }, notifications);

  //dispatch({ type: "ADD_NOTIFICATION", payload: { id, type, title, message } });

  //  dispatch({ type: "DELETE_NOTIFICATION", payload: id });

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ToastContext.Provider>
  );
};
