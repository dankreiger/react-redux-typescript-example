import { TodosActionTypes } from './todos.enum';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: TodosActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: TodosActionTypes.deleteTodo;
  payload: number;
}

export type TodoAction = FetchTodosAction | DeleteTodoAction;
