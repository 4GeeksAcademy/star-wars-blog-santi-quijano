import React from 'react'

const PlanetCard = () => {
  return (
    <div>
      &nbsp;
      <h1 style={{ color: "red" }}>Planets</h1>
      &nbsp;
      <div className="card">
        <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name of the Planet</h5>
          <ul className="card-text">
            <li>Gender</li>
            <li>Hair Color</li>
            <li>Eye Color</li>
          </ul>
          <a href="#" className="btn btn-primary">Learn more!</a>
        </div>
      </div>
    </div>
  )
}

export default PlanetCard
