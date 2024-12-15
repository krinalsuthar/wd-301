// import { v4 as uuidv4 } from 'uuid';

export interface TaskItem {
  id: string;
  deleteTask: (task: TaskItem) => void;
  title: string;
  desc: string;
  dueDate: any;
}
// default export TaskItem
