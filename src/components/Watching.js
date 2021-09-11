import React, { useState, useEffect, useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
import { TvSeriesCard } from './TvSeriesCard';
import axios from 'axios';

export const Watching = () => {
  // const { watching } = useContext(GlobalContext);
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
              <TvSeriesCard tvSeries={tvSeries} type="watching" key={index} />
            ))}
          </div>
        ) : (
          <h2 className="no-tv-series">No TV series in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};
