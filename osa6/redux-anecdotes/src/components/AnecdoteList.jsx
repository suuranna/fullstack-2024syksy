import { useDispatch, useSelector } from "react-redux";
import { updateAnecdote, voteAnecdote } from "../reducers/anecdoteReducer";
import Filter from "./Filter";
import { filterChange } from "../reducers/filterReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const vote = (anecdote) => {
    //dispatch(voteAnecdote(anecdote.id))
    dispatch(updateAnecdote(anecdote))
    dispatch(filterChange(filter))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
    //dispatch(setMessage(`You voted '${anecdote.content}'`))
    //setTimeout(() => {
    //  dispatch(setMessage(null))
    //}, 5000)
  }

  return (
    <div>
      <Filter />
      {anecdotes.slice().sort((first, second) => second.votes - first.votes)
        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList