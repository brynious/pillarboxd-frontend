import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TvSeriesCard } from "./TvSeriesCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="tv-series-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Series</h1>
          <div className="count-pill">
            {watched.length} {watched.length === 1 ? "Show" : "Shows"}
          </div>
        </div>

        {watched.length > 0 ? (
          <div className="tv-series-grid">
            {watched.map((tvSeries, index) => (
              <TvSeriesCard tvSeries={tvSeries} type="watched" key={index} />
            ))}
          </div>
        ) : (
          <h2 className="no-tv-series">No TV series in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};
