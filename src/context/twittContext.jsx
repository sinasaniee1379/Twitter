import React, { createContext, useContext, useReducer } from "react";
import { getHashTags } from "./../serveses/index";

let twittStateContext = createContext();
let twittDispatchContext = createContext();

export const twittReducer = (state, action) => {
  switch (action.type) {
    case "SET_TWITT_TEXT":
      return { ...state, twittText: action.payload };
    case "SET_TWITT_LIST":
      return { ...state, twittlist: action.payload };
    case "SET_HASH_TAGS":
      return { ...state, hashTags: action.payload };
    case "TWITT_LIKE":
      const twittId = action.payload;
      const foundIndex = state.twittlist.findIndex(
        (item) => item._id === twittId
      );
      if (foundIndex === -1) return state;
      return {
        ...state,
        twittlist: [
          ...state.twittlist.slice(0, foundIndex),
          {
            ...state.twittlist[foundIndex],
            likes: state.twittlist[foundIndex].likes + 1,
          },
          ...state.twittlist.slice(foundIndex + 1),
        ],
      };
    default: {
      throw new Error("useLayoutState must be used within layoutprovider");
    }
  }
};

export const TwittProvider = ({ children }) => {
  let [state, dispatch] = useReducer(twittReducer, {
    twittText: "",
    twittlist: [],
    hashTags: [],
  });

  return (
    <twittStateContext.Provider value={state}>
      <twittDispatchContext.Provider value={dispatch}>
        {children}
      </twittDispatchContext.Provider>
    </twittStateContext.Provider>
  );
};

export const useTwittState = () => {
  let context = useContext(twittStateContext);
  if (context === undefined)
    throw new Error("useTwittState must be used within layoutprovider");
  return context;
};

export const useTwittDispatch = () => {
  let context = useContext(twittDispatchContext);
  if (context === undefined)
    throw new Error("useTwittDispatch must be used within layoutprovider");
  return context;
};

// ========================

export const SetTwitt = (dispatch, twittText) => {
  dispatch({
    type: "SET_TWITT_TEXT",
    payload: twittText,
  });
};

export const SetTwittList = (dispatch, twittlist) => {
  dispatch({
    type: "SET_TWITT_LIST",
    payload: twittlist,
  });
};

export const LikeTwitt = (dispatch, id) => {
  dispatch({
    type: "TWITT_LIKE",
    payload: id,
  });
};

export const SetHashTags = (dispatch, list) => {
  dispatch({
    type: "SET_HASH_TAGS",
    payload: list,
  });
};

export const UpdateHashTagsList = (dispatch) => {
  getHashTags((isOk, data) => {
    if (isOk)
      dispatch({
        type: "SET_HASH_TAGS",
        payload: data,
      });
  });
};
