import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setMessage } from "../reducers/notificationReducer";

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    //dispatch({ type: 'NEW_ANECDOTE', payload: content})
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