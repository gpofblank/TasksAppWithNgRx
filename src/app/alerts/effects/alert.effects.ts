import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import * as TaskActions from '../../tasks/actions/tasks.actions';
import { map, tap, share } from 'rxjs/operators';
import { AlertService } from '../alert.service';

@Injectable()
export class AlertEffects {
  constructor(private action$: Actions, private alerts: AlertService) {}

  createTaskEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(TaskActions.CreatTaskSuccess),
        tap(() => this.alerts.success({ message: 'Task Created!' }))
      ),
    { dispatch: false }
  );

  deleteTaskEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(TaskActions.RemoveTaskSuccess),
        tap(() => this.alerts.success({ message: 'Task Deleted' }))
      ),
    { dispatch: false }
  );

  editTaskEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(TaskActions.EditTaskSuccess),
        tap(() => this.alerts.success({ message: 'Task Edited' }))
      ),
    { dispatch: false }
  );
}
