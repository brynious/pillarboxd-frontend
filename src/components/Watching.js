import React, { useState, useEffect, useContext } from 'react';
import { TvSeriesCard } from './TvSeriesCard';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export const Watching = () => {
  const { authState } = useContext(AuthContext);
  const [watchingSeries, setWatchingSeries] = useState([]);

  useEffect(() => {
    if (authState.username) {
      axios
        .get(`http://localhost:3000/user/${authState.username}/watching`)
        .then(response => {
          setWatchingSeries(response.data);
        });
    }
  }, []);

  const changeHandler = (action, tmdb_id) => {
    switch (action) {
      case 'moveToWatchlist':
        axios
          .post(
            `http://localhost:3000/user/${authState.username}/watchlist/${tmdb_id}`
          )
          .then(() => {
            setWatchingSeries(
              watchingSeries.filter(series => series.tmdb_id !== tmdb_id)
            );
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 'moveToWatched':
        axios
          .post(
            `http://localhost:3000/user/${authState.username}/watched/${tmdb_id}`
          )
          .then(() => {
            setWatchingSeries(
              watchingSeries.filter(series => series.tmdb_id !== tmdb_id)
            );
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 'removeFromWatching':
        axios
          .delete(
            `http://localhost:3000/user/${authState.username}/watching/${tmdb_id}`
          )
          .then(() => {
            setWatchingSeries(
              watchingSeries.filter(series => series.tmdb_id !== tmdb_id)
            );
          })
          .catch(err => {
            console.log(err);
          });
        break;
      default:
        console.log('changeHandler was called without a valid action');
    }
  };

  return (
    <div className="tv-series-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Currently Watching</h1>
          <span className="count-pill">
            {watchingSeries.length}{' '}
            {watchingSeries.length === 1 ? 'Show' : 'Shows'}
          </span>
        </div>

        {watchingSeries.length > 0 ? (
          <div className="tv-series-grid">
            {watchingSeries.map((tvSeries, index) => (
              <TvSeriesCard
                tvSeries={tvSeries}
                type="watching"
                key={index}
                handler={(action, tmdb_id) => changeHandler(action, tmdb_id)}
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
