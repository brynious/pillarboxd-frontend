import axios from "axios";

const AppReducer = (state, action) => {
  const data = {
    title: action.payload.title,
    tmdb_id: action.payload.tmdb_id,
    overview: action.payload.overview,
    first_air_date: action.payload.first_air_date,
    backdrop_path: action.payload.backdrop_path,
    poster_path: action.payload.poster_path,
    watch_status: "",
  };

  switch (action.type) {
    case "INITIALIZE_WATCHLIST":
      return {
        ...state,
        watchlist: [...action.payload],
      };
    case "INITIALIZE_WATCHING":
      return {
        ...state,
        watching: [...action.payload],
      };
    case "INITIALIZE_WATCHED":
      return {
        ...state,
        watched: [...action.payload],
      };

    case "ADD_SERIES_TO_WATCHLIST":
      data.watch_status = "watchlist";
      axios
        .post("https://smartroad-watchlist.herokuapp.com/api/series", data)
        .catch(err => {
          console.log("Error adding series to watchlist");
        });
      return {
        ...state,
        watchlist: [data, ...state.watchlist],
      };

    case "ADD_TO_WATCHING":
      data.watch_status = "watching";
      axios
        .post("https://smartroad-watchlist.herokuapp.com/api/series", data)
        .catch(err => {
          console.log("Error adding series to watching");
        });
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
        watching: [data, ...state.watching],
      };

    case "ADD_SERIES_TO_WATCHED":
      data.watch_status = "watched";
      axios
        .post("https://smartroad-watchlist.herokuapp.com/api/series", data)
        .catch(err => {
          console.log("Error adding series to watching");
        });
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
        watching: state.watching.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "REMOVE_FROM_WATCHLIST":
      axios
        .delete(
          `http://smartroad-watchlist.herokuapp.com/api/series/${action.payload}`
        )
        .catch(err => {
          console.log("Error removing series from watchlist");
        });
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.tmdb_id !== action.payload
        ),
      };
    case "REMOVE_FROM_WATCHING":
      axios
        .delete(
          `https://smartroad-watchlist.herokuapp.com/api/series/${action.payload}`
        )
        .catch(err => {
          console.log("Error removing series from watching");
        });
      return {
        ...state,
        watching: state.watching.filter(
          tvSeries => tvSeries.tmdb_id !== action.payload
        ),
      };
    case "REMOVE_FROM_WATCHED":
      axios
        .delete(
          `https://smartroad-watchlist.herokuapp.com/api/series/${action.payload}`
        )
        .catch(err => {
          console.log("Error removing series from watched");
        });
      return {
        ...state,
        watched: state.watched.filter(
          tvSeries => tvSeries.tmdb_id !== action.payload
        ),
      };

    case "MOVE_TO_WATCHLIST":
      data.watch_status = "watchlist";
      axios
        .post("https://smartroad-watchlist.herokuapp.com/api/series", data)
        .catch(err => {
          console.log("Error adding series to watching");
        });
      return {
        ...state,
        watchlist: [data, ...state.watchlist],
        watching: state.watching.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
        watched: state.watched.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
      };
    case "MOVE_TO_WATCHING":
      data.watch_status = "watching";
      axios
        .post("https://smartroad-watchlist.herokuapp.com/api/series", data)
        .catch(err => {
          console.log("Error adding series to watching");
        });

      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
        watching: [data, ...state.watching],
        watched: state.watched.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
      };
    case "MOVE_TO_WATCHED":
      data.watch_status = "watched";
      axios
        .post("https://smartroad-watchlist.herokuapp.com/api/series", data)
        .catch(err => {
          console.log("Error adding series to watching");
        });
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
        watching: state.watching.filter(
          tvSeries => tvSeries.tmdb_id !== data.tmdb_id
        ),
        watched: [data, ...state.watched],
      };
    default:
      return state;
  }
};

export default AppReducer;
