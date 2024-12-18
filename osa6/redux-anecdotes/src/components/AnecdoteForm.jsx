import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setMessage } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes"

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    //dispatch({ type: 'NEW_ANECDOTE', payload: content})
    //const newAnecdote = await anecdoteService.createNew(content)

    //console.log(newAnecdote)
    //dispatch(createAnecdote(newAnecdote))
    dispatch(createAnecdote(content))
    dispatch(setMessage(`Anecdote '${content}' added`))
    setTimeout(() => {
      dispatch(setMessage(null))
    }, 5000)

  }

  return (
    <form onSubmit={addNewAnecdote}>
      <h2>create new</h2>
      <div><input name='content'/></div>
      <button>create</button>
    </form>
  )
}

export default NewAnecdote