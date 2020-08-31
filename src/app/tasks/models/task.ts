import { TaskSatus } from './task-status';
import { User } from 'src/app/users/models/user';

export interface Task {
  id: string;
  name: string;
  description: string;
  status: TaskSatus;
  users?: User[];
  userIds: string[];
  isLoading?: boolean;
}
