import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TvSeriesCard } from "./TvSeriesCard";

export const Watching = () => {
  const { watching } = useContext(GlobalContext);

  return (
    <div className="tv-series-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Currently Watching</h1>
          <span className="count-pill">
            {watching.length} {watching.length === 1 ? "Show" : "Shows"}
          </span>
        </div>

        {watching.length > 0 ? (
          <div className="tv-series-grid">
            {watching.map((tvSeries, index) => (
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
