import { TodosActionTypes } from './todos.enum';

export interface TodosReducerState {
  todos: Todo[];
  loading: boolean;
  error: any;
}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosBeginAction {
  type: TodosActionTypes.fetchTodosBegin;
}

export interface FetchTodosSuccessAction {
  type: TodosActionTypes.fetchTodosSuccess;
  payload: Todo[];
}

export interface FetchTodosFailureAction {
  type: TodosActionTypes.fetchTodosFailure;
  payload: any;
}

export interface DeleteTodoAction {
  type: TodosActionTypes.deleteTodo;
  payload: number;
}

export type TodoAction =
  | FetchTodosBeginAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction
  | DeleteTodoAction;
