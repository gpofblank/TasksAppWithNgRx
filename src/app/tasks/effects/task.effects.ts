import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';

import * as TaskActions from '../actions/tasks.actions';
import { TaskService } from '../task.service';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(private action$: Actions, private taskService: TaskService) {}

  createTask$ = createEffect(() =>
    this.action$.pipe(
      ofType(TaskActions.CreateTask),
      switchMap((action) => {
        return this.taskService.createTask(action.task).pipe(
          map((res) => TaskActions.CreatTaskSuccess({ task: res })),
          catchError((err) => of(TaskActions.createTaskError({ error: err })))
        );
      })
    )
  );

  editTask = createEffect(() =>
    this.action$.pipe(
      ofType(TaskActions.EditTask),
      switchMap((action) => {
        return this.taskService.editTask(action.updates).pipe(
          map((res) => TaskActions.EditTaskSuccess({ updates: res })),
          catchError((err) => of(TaskActions.EditTaskError({ error: err })))
        );
      })
    )
  );

  deleteTask = createEffect(() =>
    this.action$.pipe(
      ofType(TaskActions.RemoveTask),
      switchMap((action) => {
        return this.taskService.removeTask(action.taskId).pipe(
          map((res) => TaskActions.RemoveTaskSuccess({ taskId: res })),
          catchError((err) => of(TaskActions.RemoveTaskError({ error: err })))
        );
      })
    )
  );
}
