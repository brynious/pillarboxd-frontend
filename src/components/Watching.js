import React, { useState, useEffect } from 'react';
import { TvSeriesCard } from './TvSeriesCard';
import axios from 'axios';

export const Watching = () => {
  const [watchingData, setWatchingData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/user/bryn/watching', {
        withCredentials: true,
      })
      .then(response => {
        setWatchingData(response.data);
      });
  }, []);

  const changeHandler = (tvSeries, action) => {
    console.log('changeHandler was called');
    console.log(tvSeries);
    console.log(action);
  };

  return (
    <div className="tv-series-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Currently Watching</h1>
          <span className="count-pill">
            {watchingData.length} {watchingData.length === 1 ? 'Show' : 'Shows'}
          </span>
        </div>

        {watchingData.length > 0 ? (
          <div className="tv-series-grid">
            {watchingData.map((tvSeries, index) => (
              <TvSeriesCard
                tvSeries={tvSeries}
                type="watching"
                key={index}
                handler={(tvSeries, action) => changeHandler(tvSeries, action)}
              />
            ))}
          </div>
        ) : (
          <h2 className="no-tv-series">No TV series in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};
