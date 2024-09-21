/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./auth/slice";
import postsReducer from "./posts/slice";

const store = configureStore({ reducer: { auth: authReducer, posts: postsReducer } });

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export default store;
