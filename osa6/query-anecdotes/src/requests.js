import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
  //axios.get(baseUrl).then(response => console.log(response.data))
  const response = await axios.get(baseUrl)
  return response.data
}

export const createAnecdote = async newAnecdote => {
  //axios.post(baseUrl, newAnecdote).then(response => response.data)
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

export const updateAnecdotesVotes = async anecdote => {
  const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1}
  const response = await axios.put(`${baseUrl}/${votedAnecdote.id}`, votedAnecdote)
  return response.data
}