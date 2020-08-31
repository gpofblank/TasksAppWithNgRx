import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as TaskActions from '../../tasks/actions/tasks.actions';
import { map, tap, share } from 'rxjs/operators';
import { AlertService } from '../alert.service';

@Injectable()
export class AlertEffects {
  constructor(private action$: Actions, private alerts: AlertService) {}

  createTaskEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(TaskActions.CreateTask),
        tap(() => this.alerts.success({ message: 'Task Created!' }))
      ),
    { dispatch: false }
  );

  deleteTaskEfect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(TaskActions.RemoveTask),
        tap(() => this.alerts.success({ message: 'Task Deleted' }))
      ),
    { dispatch: false }
  );

  editTaskEfect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(TaskActions.EditTask),
        tap(() => this.alerts.success({ message: 'Task Edited' }))
      ),
    { dispatch: false }
  );
}
