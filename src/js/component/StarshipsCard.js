import React from 'react'

const StarshipsCard = () => {
  return (
    <div className="card">
  <img src="https://placehold.co/600x400" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name of the Starship</h5>
    <ul className="card-text">
      <li>Gender</li>
      <li>Hair Color</li>
      <li>Eye Color</li>
    </ul>
    <a href="#" className="btn btn-primary">Learn more!</a>
  </div>
</div>
  )
}

export default StarshipsCard
