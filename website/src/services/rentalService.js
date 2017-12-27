import axios from "axios";

const RentalService = {

  getCustomerRentals: (customerId) => {
    return axios.get(`/customerRentals/${customerId}`)
      .then(res => res.data)
  },

  getNoRentedFilms: (customerId) => {
    return axios.get(`/availableFilms/${customerId}`)
      .then(res => res.data)
  },

  createRental: (customerId, filmId) => {
    return axios.post('/rental/', {
      customerId: customerId,
      filmId: filmId
    })
      .then(res => res.data)
  },

  updateRental: (customerId, filmId) => {
    return axios.put('/rentalUpdate/', {
      customerId: customerId,
      filmId: filmId
    })
      .then(res => res.data)
  }
}

export default RentalService;