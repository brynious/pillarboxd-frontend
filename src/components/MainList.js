import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SiteBackground } from './SiteBackground';
import { TvSeriesCard } from './TvSeriesCard';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

export const MainList = ({ mainListType }) => {
  const { authState } = useContext(AuthContext);
  const [seriesList, setSeriesList] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    axios.get(`https://pillarboxd-backend.herokuapp.com/user/${user}/${mainListType}`).then(response => {
      setSeriesList(response.data);
    });
  }, [mainListType]);

  const changeHandler = (action, tmdb_id) => {
    switch (action) {
      case 'moveToWatchlist':
        axios
          .post(`https://pillarboxd-backend.herokuapp.com/user/${authState.username}/watchlist/${tmdb_id}`)
          .then(() => {
            // remove series from currently viewed list if it's the 'watching' list, else leave it
            if (mainListType === 'watching') {
              setSeriesList(seriesList.filter(series => series.tmdb_id !== tmdb_id));
            }
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 'moveToWatching':
        axios
          .post(`https://pillarboxd-backend.herokuapp.com/user/${authState.username}/watching/${tmdb_id}`)
          .then(() => {
            // remove series from currently viewed list if it's the 'watching' list, else leave it
            if (mainListType === 'watchlist') {
              setSeriesList(seriesList.filter(series => series.tmdb_id !== tmdb_id));
            }
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 'moveToWatched':
        axios
          .post(`https://pillarboxd-backend.herokuapp.com/user/${authState.username}/watched/${tmdb_id}`)
          .then(() => {
            setSeriesList(seriesList.filter(series => series.tmdb_id !== tmdb_id));
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 'removeFromMainList':
        axios
          .delete(`https://pillarboxd-backend.herokuapp.com/user/${authState.username}/${mainListType}/${tmdb_id}`)
          .then(() => {
            setSeriesList(seriesList.filter(series => series.tmdb_id !== tmdb_id));
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
    <SiteBackground>
      <div className="tv-series-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">{mainListType}</h1>
            <span className="count-pill">
              {seriesList.length} {seriesList.length === 1 ? 'Show' : 'Shows'}
            </span>
          </div>

          {seriesList.length > 0 ? (
            <div className="tv-series-grid">
              {seriesList.map((tvSeries, index) => (
                <TvSeriesCard
                  tvSeries={tvSeries}
                  mainListType={mainListType}
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
    </SiteBackground>
  );
};
