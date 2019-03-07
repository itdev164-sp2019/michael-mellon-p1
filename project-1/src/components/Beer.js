import React from "react";

const Beer = props => (
  <div className="container">
    <div className="row">
      {props.beers.map(beer => {
        return (
          <div
            key={beer.id}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="beer__box">
              <img
                className="beer__box-img"
                src={beer.labels.medium}
                alt={beer.name}
              />
              <div className="beer__text">
                <h5 className="beer__title">
                  {beer.name.length < 20
                    ? `${beer.name}`
                    : `${beer.name.substring(0, 25)}...`}
                </h5>
                <p className="beer__subtitle">
                  <span>{beer.style.name}</span>
                </p>
              </div>
              <button className="beer__buttons">View Beer</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Beer;
