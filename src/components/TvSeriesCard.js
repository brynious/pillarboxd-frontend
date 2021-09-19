import React from 'react';
import { TvSeriesControls } from './TvSeriesControls';

export const TvSeriesCard = ({
  tvSeries,
  mainListType,
  handler,
  showControls,
}) => {
  return (
    <div className="tv-series-card">
      <div className="overlay"></div>
      {tvSeries.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${tvSeries.poster_path}`}
          alt={`${tvSeries.name} Poster`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      {showControls && (
        <TvSeriesControls
          mainListType={mainListType}
          tvSeries={tvSeries}
          handler={handler}
        />
      )}
    </div>
  );
};
