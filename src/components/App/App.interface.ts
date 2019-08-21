import { Todo, deleteTodo } from '../../state/todos';

export interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export interface AppState {
  fetching: boolean;
}
