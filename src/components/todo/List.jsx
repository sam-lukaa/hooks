import { useStateContext, useDispatchContext } from "../provider/index";

export default function TodoList() {
  const state = useStateContext();
  const dispatch = useDispatchContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD" })}>Add Todo</button>
      <button onClick={() => dispatch({ type: "REMOVE_ALL" })}>
        Remove All Todo
      </button>
      <br />
      <br />
      <br />
      {state.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatchContext();

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "COMPLETED", payload: id })}
      />
      <input type="text" defaultValue={text} />
      <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
        X
      </button>
    </div>
  );
}
