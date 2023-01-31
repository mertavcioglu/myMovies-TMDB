import React from "react";

function MovieList(props) {
  return (
    <div className="row">
      {props.moviesProp.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt="Sample Movie Alt"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text" style={{ minHeight: "5rem" }}>
                {movie.overview}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-md btn-outline-danger"
                  type="button"
                  onClick={(event) => props.deleteMovieProp(movie)}
                >
                  Delete
                </button>
                <h2>
                  <span className="badge bg-info">{movie.vote_average}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
