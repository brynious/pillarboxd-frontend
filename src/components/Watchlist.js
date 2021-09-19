import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TvSeriesCard } from './TvSeriesCard';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export const Watchlist = () => {
  const { authState } = useContext(AuthContext);
  const [watchlistSeries, setWatchlistSeries] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${user}/watchlist`).then(response => {
      setWatchlistSeries(response.data);
    });
  }, []);

  const changeHandler = (action, tmdb_id) => {
    switch (action) {
      case 'moveToWatching':
        axios
          .post(
            `http://localhost:3000/user/${authState.username}/watching/${tmdb_id}`
          )
          .then(() => {
            setWatchlistSeries(
              watchlistSeries.filter(series => series.tmdb_id !== tmdb_id)
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
            setWatchlistSeries(
              watchlistSeries.filter(series => series.tmdb_id !== tmdb_id)
            );
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 'removeFromWatchlist':
        axios
          .delete(
            `http://localhost:3000/user/${authState.username}/watchlist/${tmdb_id}`
          )
          .then(() => {
            setWatchlistSeries(
              watchlistSeries.filter(series => series.tmdb_id !== tmdb_id)
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
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlistSeries.length}{' '}
            {watchlistSeries.length === 1 ? 'Show' : 'Shows'}
          </span>
        </div>

        {watchlistSeries.length > 0 ? (
          <div className="tv-series-grid">
            {watchlistSeries.map((tvSeries, index) => (
              <TvSeriesCard
                tvSeries={tvSeries}
                mainList="watchlist"
                key={index}
                showControls={authState.isAuthenticated}
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
