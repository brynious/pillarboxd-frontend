import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ tvSeries }) => {
  tvSeries = {
    title: tvSeries.name,
    tmdb_id: tvSeries.id,
    overview: tvSeries.overview,
    first_air_date: tvSeries.first_air_date,
    backdrop_path: tvSeries.backdrop_path,
    poster_path: tvSeries.poster_path,
  };

  const {
    addSeriesToWatchlist,
    addSeriesToWatching,
    addSeriesToWatched,
    watchlist,
    watching,
    watched,
  } = useContext(GlobalContext);

  let storedSeriesWatchlist = watchlist.find(
    o => o.tmdb_id === tvSeries.tmdb_id
  );
  let storedSeriesWatching = watching.find(o => o.tmdb_id === tvSeries.tmdb_id);
  let storedSeriesWatched = watched.find(o => o.tmdb_id === tvSeries.tmdb_id);

  const watchlistDisabled = storedSeriesWatchlist
    ? true
    : storedSeriesWatched
    ? true
    : storedSeriesWatching
    ? true
    : false;

  // const watchlistDisabled = storedSeriesWatchlist
  //   ? true
  //   : storedSeriesWatched
  //   ? true
  //   : false;

  const watchingDisabled = storedSeriesWatching
    ? true
    : storedSeriesWatched
    ? true
    : false;

  const watchedDisabled = storedSeriesWatched ? true : false;

  return (
    <div>
      <div className="result-card">
        <div className="poster-wrapper">
          {tvSeries.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${tvSeries.poster_path}`}
              alt={`${tvSeries.name} Poster`}
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title">{tvSeries.name}</h3>
            <h4 className="first-air-date">
              {tvSeries.first_air_date
                ? tvSeries.first_air_date.substring(0, 4)
                : "-"}
            </h4>
          </div>

          <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => addSeriesToWatchlist(tvSeries)}
            >
              Watchlist
            </button>

            <button
              className="btn"
              disabled={watchingDisabled}
              onClick={() => addSeriesToWatching(tvSeries)}
            >
              Watching
            </button>

            <button
              className="btn"
              disabled={watchedDisabled}
              onClick={() => addSeriesToWatched(tvSeries)}
            >
              Watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
