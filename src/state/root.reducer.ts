import { combineReducers } from 'redux';
import { todosReducer, Todo } from './todos';

export interface StoreState {
  readonly todos: Todo[];
}

export default combineReducers<StoreState>({
  todos: todosReducer
});
