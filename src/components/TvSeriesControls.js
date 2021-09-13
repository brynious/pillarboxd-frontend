import React from 'react';

export const TvSeriesControls = ({ tvSeries, type, handler }) => {
  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
          <button
            title="Move to Watching"
            className="ctrl-btn"
            onClick={e => handler('moveToWatching', tvSeries.tmdb_id)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            title="Move to Watched"
            className="ctrl-btn"
            onClick={e => handler('moveToWatched', tvSeries.tmdb_id)}
          >
            <i className="fa-fw fas fa-check"></i>
          </button>

          <button
            title="Remove from Watchlist"
            className="ctrl-btn"
            onClick={e => handler('removeFromWatchlist', tvSeries.tmdb_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === 'watching' && (
        <>
          <button
            title="Move to Watchlist"
            className="ctrl-btn"
            onClick={e => handler('moveToWatchlist', tvSeries.tmdb_id)}
          >
            <i className="fa-fw fas fa-clipboard-list"></i>
          </button>

          <button
            title="Move to Watched"
            className="ctrl-btn"
            onClick={e => handler('moveToWatched', tvSeries.tmdb_id)}
          >
            <i className="fa-fw fas fa-check"></i>
          </button>

          <button
            title="Remove from Watching"
            className="ctrl-btn"
            onClick={e => handler('removeFromWatching', tvSeries.tmdb_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button
            title="Move to Watchlist"
            className="ctrl-btn"
            onClick={e => handler('moveToWatchlist', tvSeries.tmdb_id)}
          >
            <i className="fa-fw fas fa-clipboard-list"></i>
          </button>

          <button
            title="Move to Watching"
            className="ctrl-btn"
            onClick={e => handler('moveToWatching', tvSeries.tmdb_id)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            title="Remove from Watched"
            className="ctrl-btn"
            onClick={e => handler('removeFromWatched', tvSeries.tmdb_id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
