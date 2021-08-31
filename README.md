# tv-watchlist

## Overview

Front-end for Television Tracking site that tracks shows through three lists: watchlist, watching, and watched. Back-end can be found in my repository [tv-watchlist-backend](https://github.com/brynious/tv-watchlist-backend).

## Design

The front-end side of this project is extended/inspired from the youtube tutorial [Create a Movie Watchlist with React Hooks, Context API and localStorage](https://www.youtube.com/watch?v=1eO_hNYzaSc&list=LL&index=3) by [Matt the Dev](https://www.youtube.com/channel/UC8TIe9eTW263BU9uLXLr5sw).

These are the following changes I made:

1. Instead of saving data locally, created a full back-end with Node, Express, and MongoDB for saving data in cloud. More info in repository linked above.
1. Added additional watch state 'watching' to original states 'watchlist' and 'watched'.
1. Connected to TMDB's API search for television shows, instead of movies.

## Purpose

Created to learn the MERN stack and also help my flatmates and I track some of the television shows we're watching together.

## Running on local

To clone and run locally, just clone with git and run the classic `npm install` then `npm run start`, as per the `package.json` scripts.
