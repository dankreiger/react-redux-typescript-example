import axios from 'axios';
import { Dispatch } from 'redux';
import { TodosActionTypes } from './todos.enum';
import { Todo, FetchTodosAction, DeleteTodoAction } from './todos.interface';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: TodosActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: TodosActionTypes.deleteTodo,
  payload: id
});
