import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  public createTask(task: Task) {
    console.log('creating task');
    const id = uuid();
    return of({ ...task, id }).pipe(delay(1000));
  }

  //TODO: Edit Task Method
  public editTask(updates) {
    console.log('updating task');
    const id = uuid();
    return of(updates).pipe(delay(1000));
  }

  //TODO:  Delete TASK METHOD
  public removeTask(taskId) {
    console.log('removing task');
    const id = uuid();
    return of(taskId).pipe(delay(1000));
  }
}
