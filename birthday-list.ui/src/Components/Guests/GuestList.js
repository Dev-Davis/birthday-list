import React from 'react'

class GuestList extends React.Component {
  render() {
    const { guest } = this.props;
    return (
      <div className="the-list col-lg-6 offset-3">
        <ul className="col-12">
        <h6 className="invite">Guest #{guest.id}</h6>
        <p>Name: {guest.firstName} {guest.lastName}</p>
        <p>Address: {guest.address}</p>
        <p>Relationship: {guest.relationship}</p>
        <p>City: {guest.city}</p>
        <p>State: {guest.state}</p>
        </ul>
      </div>
    )
  }
}

export default GuestList