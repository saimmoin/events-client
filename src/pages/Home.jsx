/** @format */

import React from "react";
import { useAppSelector } from "../store/store";
import { selectProfile } from "../store/auth/slice";

const Home = () => {
  const profile = useAppSelector(selectProfile);
  return <div className="pt-14 min-h-screen">home</div>;
};

export default Home;
