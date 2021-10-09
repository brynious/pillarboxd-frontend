// import React from 'react';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <div className="homepage">
      <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Welcome to{' '}
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Pillarboxd</span>
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            <Link to="/signup" className="underline">
              Sign Up
            </Link>{' '}
            and start tracking the TV shows you're watching
          </p>
        </div>
      </div>
    </div>
  );
};
