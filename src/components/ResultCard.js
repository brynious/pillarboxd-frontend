import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export const ResultCard = ({ tvSeries }) => {
  const { authState } = useContext(AuthContext);

  tvSeries = {
    title: tvSeries.name,
    tmdb_id: tvSeries.id,
    overview: tvSeries.overview,
    first_air_date: tvSeries.first_air_date,
    backdrop_path: tvSeries.backdrop_path,
    poster_path: tvSeries.poster_path,
  };

  const moveToWatchlist = tmdb_id => {
    axios.post(`https://pillarboxd-backend.herokuapp.com//user/${authState.username}/watchlist/${tmdb_id}`).catch(err => {
      console.log(err);
    });
  };

  const moveToWatching = tmdb_id => {
    axios.post(`https://pillarboxd-backend.herokuapp.com//user/${authState.username}/watching/${tmdb_id}`).catch(err => {
      console.log(err);
    });
  };

  const moveToWatched = tmdb_id => {
    axios.post(`https://pillarboxd-backend.herokuapp.com//user/${authState.username}/watched/${tmdb_id}`).catch(err => {
      console.log(err);
    });
  };

  return (
    <div>
      <div className="result-card">
        <div className="poster-wrapper">
          {tvSeries.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w500${tvSeries.poster_path}`} alt={`${tvSeries.name} Poster`} />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title">{tvSeries.name}</h3>
            <h4 className="first-air-date">{tvSeries.first_air_date ? tvSeries.first_air_date.substring(0, 4) : '-'}</h4>
          </div>

          <div className="controls">
            <button className="btn" onClick={() => moveToWatchlist(tvSeries.tmdb_id)}>
              Watchlist
            </button>

            <button className="btn" onClick={() => moveToWatching(tvSeries.tmdb_id)}>
              Watching
            </button>

            <button className="btn" onClick={() => moveToWatched(tvSeries.tmdb_id)}>
              Watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
