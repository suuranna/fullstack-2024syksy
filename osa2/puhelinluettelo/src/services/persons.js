import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = nameObject => {
    return axios.post(baseUrl, nameObject)
}

const deleteOne = (id) => {
    const url = baseUrl + "/" + id
    return axios.delete(url)
}

export default { getAll, create, deleteOne }