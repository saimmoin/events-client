/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/slice";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

const store = configureStore({ reducer: { user: userReducer } });
export default store;
