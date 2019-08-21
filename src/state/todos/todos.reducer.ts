import { Todo, TodoAction, TodosReducerState } from './todos.interface';
import { TodosActionTypes } from './todos.enum';

const todosReducerInitialState: TodosReducerState = {
  todos: [],
  error: null,
  loading: false
};

export const todosReducer = (
  state: TodosReducerState = todosReducerInitialState,
  action: TodoAction
): TodosReducerState => {
  switch (action.type) {
    case TodosActionTypes.fetchTodosBegin:
      return {
        ...state,
        loading: true
      };
    case TodosActionTypes.fetchTodosSuccess:
      return {
        ...state,
        loading: false,
        todos: action.payload
      };
    case TodosActionTypes.fetchTodosFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case TodosActionTypes.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter(({ id }: Todo) => id !== action.payload)
      };
    default:
      return state;
  }
};
