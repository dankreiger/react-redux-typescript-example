import { createSelector, Selector, OutputSelector } from 'reselect';
import { StoreState } from '../root.reducer';
import { TodosReducerState, Todo } from './todos.interface';

const selectTodosReducer: Selector<StoreState, TodosReducerState> = (
  state: StoreState
) => state.todosReducer;

export const selectTodos: OutputSelector<
  StoreState,
  Todo[],
  (res: TodosReducerState) => Todo[]
> = createSelector(
  [selectTodosReducer],
  todosReducer => todosReducer.todos
);

export const selectTodosLoading: OutputSelector<
  StoreState,
  boolean,
  (res: TodosReducerState) => boolean
> = createSelector(
  [selectTodosReducer],
  todosReducer => todosReducer.loading
);
