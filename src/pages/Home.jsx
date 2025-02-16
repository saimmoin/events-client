/** @format */

import { getAllPostsQuery } from "@/store/posts/thunk";
import Spinner from "../components/Loader";
import { isLoading } from "../store/auth/slice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      <div className="min-h-screen bg-black text-white">
        {/* Header Section */}
        <header className="bg-gray-900 py-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-orange-500">Aovis</h1>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Movies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-800 py-20 text-center">
          <h2 className="text-5xl font-bold">Thriller Movie</h2>
          <p className="text-xl mt-4">Behind The Mask - Coming June 2023</p>
          <Button className="mt-6 px-6 py-2 text-xl bg-orange-500 hover:bg-orange-600">Get Tickets</Button>
        </section>

        {/* Ticket Section */}
        <section className="container mx-auto py-12">
          <h3 className="text-3xl font-bold mb-6">Tickets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Card key={index} className="bg-gray-900">
                  <CardContent>
                    <div className="aspect-w-16 aspect-h-9 bg-gray-700"></div>
                    <h4 className="mt-4 text-lg font-bold">Movie {index + 1}</h4>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Movies Now Playing */}
        <section className="bg-gray-800 py-12">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-6">Movie Now Playing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Card key={index} className="bg-gray-900">
                    <CardContent>
                      <div className="aspect-w-16 aspect-h-9 bg-gray-700"></div>
                      <h4 className="mt-4 text-lg font-bold">Now Playing {index + 1}</h4>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-6">
          <div className="container mx-auto text-center">
            <p className="text-gray-500">&copy; 2025 Aovis. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
