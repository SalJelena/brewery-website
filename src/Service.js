import axios from 'axios'


export const getAllBeers = () => axios.get('https://brewery-server.herokuapp.com/beers')

export const getAllUsers = () => axios.get('https://brewery-server.herokuapp.com/users')

export const postUser = (user) => axios.post('https://brewery-server.herokuapp.com/users', user)

export const getBeerById = (id) => axios.get(`https://brewery-server.herokuapp.com/beers/${id}`)

export const postNewBeer = (beer) => axios.post('https://brewery-server.herokuapp.com/beers', beer)

export const addToFavorite = (id,beer) => axios.patch(`https://brewery-server.herokuapp.com/users/${id}`, {beer: beer})