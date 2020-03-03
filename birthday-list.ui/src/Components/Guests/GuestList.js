import React from 'react'
import './GuestList.css'

class GuestList extends React.Component {
  render() {
    const { guest } = this.props;
    return (
      <div className="container">
        <ul className="col-12">
          <h6 className="invite">Guest #{guest.id}</h6>
          <li>Name: {guest.firstName} {guest.lastName}</li>
          <li>Address: {guest.address}</li>
          <li>Relationship: {guest.relationship}</li>
          <li>City: {guest.city}</li>
          <li>State: {guest.state}</li>
        </ul>
      </div>
    )
  }
}

export default GuestList