import React from 'react';
import { TvSeriesControls } from './TvSeriesControls';

export const TvSeriesCard = ({ tvSeries, mainList, handler, showControls }) => {
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
          mainList={mainList}
          tvSeries={tvSeries}
          handler={handler}
        />
      )}
    </div>
  );
};
