import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { getAnecdotes, createAnecdote, updateAnecdotesVotes } from './requests'
import { useReducer, useContext } from 'react'
import NotificationContext from './NotificationContext'

const App = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext)

  const queryClient = useQueryClient()

  const voteAnecdoteMutation = useMutation(
    { mutationFn: updateAnecdotesVotes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const handleVote = (anecdote) => {
    voteAnecdoteMutation.mutate(anecdote)
    notificationDispatch({ type: 'SET_MESSAGE', payload: `you voted ''${anecdote.content}`})
    setTimeout(() => {
      notificationDispatch({ type: 'SET_MESSAGE', payload: null})
    }, 5000);
    //console.log('vote')
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    //queryFn: () => axios.get('http://localhost:3001/anecdotes').then(response => response.data),
    queryFn: getAnecdotes,
    retry: 2
  })
  //console.log(JSON.parse(JSON.stringify(result)))
  if ( result.isLoading ) {
    return <div>loading data...</div>
  }
  if ( result.isError) {
    return <span>anecdote service not available due to problems in server</span>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
        <Notification />
        <AnecdoteForm />
      
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default App
