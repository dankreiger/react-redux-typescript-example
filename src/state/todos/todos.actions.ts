import axios from 'axios';
import { Dispatch } from 'redux';
import { TodosActionTypes } from './todos.enum';
import {
  Todo,
  FetchTodosBeginAction,
  DeleteTodoAction,
  FetchTodosSuccessAction,
  FetchTodosFailureAction
} from './todos.interface';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodosBegin = (): FetchTodosBeginAction => ({
  type: TodosActionTypes.fetchTodosBegin
});

export const fetchTodosSuccess = (data: Todo[]): FetchTodosSuccessAction => ({
  type: TodosActionTypes.fetchTodosSuccess,
  payload: data
});

export const fetchTodosFailure = (error: any): FetchTodosFailureAction => ({
  type: TodosActionTypes.fetchTodosFailure,
  payload: error
});

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchTodosBeginAction>(fetchTodosBegin());
    try {
      const { data } = await axios.get<Todo[]>(url);
      dispatch<FetchTodosSuccessAction>(fetchTodosSuccess(data));
    } catch (error) {
      dispatch<FetchTodosFailureAction>(fetchTodosFailure(error));
    }
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: TodosActionTypes.deleteTodo,
  payload: id
});
