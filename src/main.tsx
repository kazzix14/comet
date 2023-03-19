import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

import { StyledApp } from "./app";
import { editorSlice } from "./editor/editor.slice";
import { inputSlice } from "./input.slice";
import { backendSlice } from "./backend.slice";

const store = configureStore({
  reducer: {
    editor: editorSlice.reducer,
    input: inputSlice.reducer,
    backend: backendSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type DispatchFunction = () => AppDispatch;
export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledApp />
    </Provider>
  </React.StrictMode>
);
