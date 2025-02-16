/** @format */

import { getAllPostsQuery } from "@/store/posts/thunk";
import Spinner from "../components/Loader";
import { isLoading } from "../store/auth/slice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavbarContent } from "@/components/Navbar";
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import banner from "@/assets/banner.jpg";

const Home = () => {
  const isAuthLoading = useAppSelector(isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPostsQuery());
  }, []);
  return (
    <div>
      <nav
        className={`inset-x-0 top-0 z-50 transition-all duration-300
        translate-y-0 bg-transparent text-black`}
      >
        <NavbarContent />
      </nav>
      <style>
        {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Playfair Display', serif;
                    }
                    body {
                        background: black;
                        color: white;
                        text-align: center;
                    }
                    .hero {
                        position: relative;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        overflow: hidden;
                        color: white;
                    }
                    .hero::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: ${banner.jpg} no-repeat center center/cover;
                        filter: grayscale(100%);
                        z-index: -1;
                    }
                    .hero h2 {
                        color: orange;
                        font-size: 24px;
                        position: absolute;
                        top: calc(40% - 40px);
                        left: 34.5%;
                        transform: translate(-50%, -100%);
                    }
                    .hero h1 {
                        font-size: 60px;
                        font-weight: bold;
                    }
                    .hero p {
                        margin-top: 10px;
                        font-size: 18px;
                    }
                    .release-date {
                        margin-top: 10px;
                        font-size: 20px;
                        font-weight: bold;
                        color: white;
                    }
                    .btn {
                        margin-top: 20px;
                        padding: 10px 20px;
                        background: orange;
                        border: none;
                        cursor: pointer;
                        font-size: 18px;
                        color: black;
                        font-weight: bold;
                    }
                    .trailers {
                        position: relative;
                        background: orange;
                        padding: 50px;
                        margin-top: -80px;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                    }
                    .trailers h3 {
                        font-size: 22px;
                        font-family: 'Playfair Display', serif;
                        color: black;
                    }
                    .trailer-container {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        margin-top: 10px;
                    }
                    .trailer-container img {
                        width: 250px;
                        height: 140px;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                `}
      </style>

      <div className="hero">
        <h2>Thriller Movie</h2>
        <h1>BEHIND THE MASK</h1>
        <p>Written and Directed by Kenvin Lord / German 2023</p>
        <p className="release-date">
          Coming in <strong>June 2023</strong>
        </p>
        <button className="btn">Get Ticket</button>
      </div>
      <div className="trailers">
        <h3>Trailers</h3>
        <div className="trailer-container">
          <img src={movie1} alt="Trailer 1" />
          <img src={movie2} alt="Trailer 2" />
          <img src={movie3} alt="Trailer 3" />
          <img src={movie4} alt="Trailer 4" />
        </div>
      </div>
    </div>
  );
};

export default Home;
