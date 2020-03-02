import React from 'react'
import './Guests.css'
import guestData from '../../Data/BdayData'
import GuestList from './GuestList'

class Guests extends React.Component {
  state = {
    list: []
  }

  getPartyGuests = () => {
    guestData
    .getAllGuests()
    .then((res) => {
      this.setState({ list: res.data })
    })
    .catch(err => console.error("couldn't load guests"))
  }

  componentDidMount() {
    this.getPartyGuests();
  }

  render() {
    const theList = this.state.list.map((guest) => (
      <GuestList
        key={guest.id}
        guest={guest}
      />
    ))
    return (
      <div className="guests container">
        {/* <h1 className="col-lg-12">Guest List</h1> */}
        {theList}
      </div>
    )
  }
}

export default Guests