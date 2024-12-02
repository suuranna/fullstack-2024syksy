import axios from 'axios'
const baseUrl = '/api/persons'

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

const update = (nameObject) => {
    const url = baseUrl + "/" + nameObject.id
    const request = axios.put(url, nameObject)
    return request.then(response => response.data)
}

export default { getAll, create, deleteOne, update }