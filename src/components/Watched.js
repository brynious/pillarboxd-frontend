import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TvSeriesCard } from './TvSeriesCard';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export const Watched = () => {
  const { authState } = useContext(AuthContext);
  const [watchedSeries, setWatchedSeries] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${user}/watched`).then(response => {
      setWatchedSeries(response.data);
    });
  }, []);

  const changeHandler = (action, tmdb_id) => {
    switch (action) {
      case 'moveToWatchlist':
        axios
          .post(
            `http://localhost:3000/user/${authState.username}/watchlist/${tmdb_id}`
          )
          .catch(err => {
            console.log(err);
          });
        break;
      case 'moveToWatching':
        axios
          .post(
            `http://localhost:3000/user/${authState.username}/watching/${tmdb_id}`
          )
          .catch(err => {
            console.log(err);
          });
        break;
      case 'removeFromWatched':
        axios
          .delete(
            `http://localhost:3000/user/${authState.username}/watched/${tmdb_id}`
          )
          .then(() => {
            setWatchedSeries(
              watchedSeries.filter(series => series.tmdb_id !== tmdb_id)
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
          <h1 className="heading">Watched Series</h1>
          <div className="count-pill">
            {watchedSeries.length}{' '}
            {watchedSeries.length === 1 ? 'Show' : 'Shows'}
          </div>
        </div>

        {watchedSeries.length > 0 ? (
          <div className="tv-series-grid">
            {watchedSeries.map((tvSeries, index) => (
              <TvSeriesCard
                tvSeries={tvSeries}
                type="watched"
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
