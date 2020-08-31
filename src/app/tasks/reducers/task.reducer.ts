import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Task} from '../models/task';
import {Action, createReducer, createSelector, on} from '@ngrx/store';

import * as TaskActions from '../actions/tasks.actions';

export interface State extends EntityState<Task> {
  selectedTaskId: number | string;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

const initialState: State = adapter.getInitialState({selectedTaskId: null});

const tasksReducer = createReducer(
  initialState,
  on(TaskActions.CreatTaskSuccess, (state, {task}) => {
    const {users, ...rest} = task;

    return adapter.addOne(
      {...rest, userIds: users.map((user) => user.id)},
      state
    );
  }),

  on(TaskActions.EditTask, (state, {updates}) => {
      const updatedTask = {...state.entities[updates.id], isLoading: true};
      return adapter.updateOne({id: updatedTask.id, changes: updatedTask}, state);
    }
  ),

  on(TaskActions.EditTaskSuccess, (state, {updates}) =>
       adapter.updateOne({...updates, changes: {...updates.changes, isLoading: false}}, state)
  ),

  on(TaskActions.RemoveTaskSuccess, (state, {taskId}) =>
    adapter.removeOne(taskId, state)
  )
);

export const reducer = (state: State, acion: Action) => {
  return tasksReducer(state, acion);
};

export const {selectEntities} = adapter.getSelectors();

// equal to the select all function from adapter.getSelectors()
export const selectAll = (state: EntityState<Task>) =>
  (state.ids as number[]).map((id) => state.entities[id]);

export const selectById = (id) =>
  createSelector(selectEntities, (taskEntities) => taskEntities[id]);
