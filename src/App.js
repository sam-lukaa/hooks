import { ApplyContext } from "./components/provider/index";
import TodoList from "./components/todo/List";

export default function App() {
  return (
    <ApplyContext>
      <TodoList />
    </ApplyContext>
  );
}


