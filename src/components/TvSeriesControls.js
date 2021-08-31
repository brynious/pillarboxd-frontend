import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TvSeriesControls = ({ tvSeries, type }) => {
  const {
    removeFromWatchlist,
    removeFromWatched,
    removeFromWatching,
    moveToWatchlist,
    moveToWatching,
    moveToWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatching(tvSeries)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button className="ctrl-btn" onClick={() => moveToWatched(tvSeries)}>
            <i className="fa-fw fas fa-check"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchlist(tvSeries.tmdb_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watching" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveToWatchlist(tvSeries)}
          >
            {/* <i className="fa-fw far fa-eye-slash"></i> */}
            <i className="fa-fw fas fa-clipboard-list"></i>
          </button>

          <button className="ctrl-btn" onClick={() => moveToWatched(tvSeries)}>
            <i className="fa-fw fas fa-check"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatching(tvSeries.tmdb_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveToWatchlist(tvSeries)}
          >
            {/* <i className="fa-fw far fa-eye-slash"></i> */}
            <i className="fa-fw fas fa-clipboard-list"></i>
          </button>

          <button className="ctrl-btn" onClick={() => moveToWatching(tvSeries)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(tvSeries.tmdb_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
