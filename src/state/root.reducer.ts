import { combineReducers } from 'redux';
import { todosReducer, TodosReducerState } from './todos';

export interface StoreState {
  todosReducer: TodosReducerState;
}

export default combineReducers<StoreState>({
  todosReducer
});
