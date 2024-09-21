/** @format */

import { getAllPostsQuery } from "@/store/posts/thunk";
import Spinner from "../components/Loader";
import { isLoading } from "../store/auth/slice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";

const Home = () => {
  const isAuthLoading = useAppSelector(isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPostsQuery());
  }, []);
  return (
    <div className="pt-14 min-h-screen">
      {isAuthLoading && (
        <div className="flex justify-center items-center">
          <Spinner className="h-10 w-10" />
        </div>
      )}
      home
    </div>
  );
};

export default Home;
