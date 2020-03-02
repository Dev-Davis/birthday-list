import axios from 'axios'

const guestUrl = 'https://localhost:44302/api/guests'

const getAllGuests = () => new Promise((resolve, reject) => {
  axios.get(guestUrl)
  .then((res) => {
    resolve(res)
  })
  .catch(err => reject(err))
})

export default {
  getAllGuests
}