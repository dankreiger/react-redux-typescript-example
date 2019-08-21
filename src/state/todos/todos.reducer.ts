import { Todo, TodoAction } from './todos.interface';
import { TodosActionTypes } from './todos.enum';

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case TodosActionTypes.fetchTodos:
      return action.payload;
    case TodosActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
