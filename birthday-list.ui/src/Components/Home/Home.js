import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    
    const wishlist = `/wishlist`;
    const guests = `/guests`;
    return (
      <div className="Home container">
        <h1 className="party-name">Lisa's Party</h1>
        <Link className="btn btn-link col-lg-6 presents" to={wishlist}>View Presents</Link>
        <Link className="btn btn-link col-lg-6 guests" to={guests}>View Guests</Link>
      </div>
    )
  }
}

export default Home