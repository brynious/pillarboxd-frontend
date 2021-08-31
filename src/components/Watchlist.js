import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TvSeriesCard } from "./TvSeriesCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="tv-series-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Show" : "Shows"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="tv-series-grid">
            {watchlist.map((tvSeries, index) => (
              <TvSeriesCard tvSeries={tvSeries} type="watchlist" key={index} />
            ))}
          </div>
        ) : (
          <h2 className="no-tv-series">No TV series in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};
