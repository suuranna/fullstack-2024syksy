import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'

const getCountry = (country) => {
    return axios.get(baseUrl + 'api/name/' + country)
}

const getAll = () => {
    return axios.get(baseUrl + 'api/all')
}

export default { getCountry, getAll }