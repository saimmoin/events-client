import banner from "@/assets/banner.jpg";
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import { NavbarContent } from "@/components/Navbar";
import { getAllPostsQuery } from "@/store/posts/thunk";
import { useEffect } from "react";
import { isLoading } from "../store/auth/slice";
import { useAppDispatch, useAppSelector } from "../store/store";

const Home = () => {
  const isAuthLoading = useAppSelector(isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPostsQuery());
  }, []);

  return (
    <div className="min-h-screen  text-white">
      {/* Navbar */}
      <nav className="inset-x-0  transition-all duration-300 translate-y-0 bg-transparent text-black">
        <NavbarContent />
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center flex-col overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <h2 className="text-orange-500 text-2xl absolute top-[40%] -translate-y-[140%] left-[34.5%] -translate-x-1/2">
          Thriller Movie
        </h2>
        <h1 className="text-6xl font-bold z-10">
          BEHIND THE MASK
        </h1>
        <p className="mt-2.5 text-lg z-10">
          Written and Directed by Kenvin Lord / German 2023
        </p>
        <p className="mt-2.5 text-xl font-bold z-10">
          Coming in <strong>June 2023</strong>
        </p>
        <button className="mt-5 px-5 py-2.5 bg-orange-500 text-black text-lg font-bold cursor-pointer hover:bg-orange-600 transition-colors z-10">
          Get Ticket
        </button>
      </div>

      {/* Trailers Section */}
      <div className="relative bg-orange-500 px-12 py-12 -mt-20 w-4/5 mx-auto rounded-lg shadow-lg">
        <h3 className="text-2xl text-black">
          Trailers
        </h3>
        <div className="flex justify-center gap-5 mt-2.5">
          <img 
            src={movie1} 
            alt="Trailer 1" 
            className="w-[250px] h-[140px] object-cover rounded"
          />
          <img 
            src={movie2} 
            alt="Trailer 2" 
            className="w-[250px] h-[140px] object-cover rounded"
          />
          <img 
            src={movie3} 
            alt="Trailer 3" 
            className="w-[250px] h-[140px] object-cover rounded"
          />
          <img 
            src={movie4} 
            alt="Trailer 4" 
            className="w-[250px] h-[140px] object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;