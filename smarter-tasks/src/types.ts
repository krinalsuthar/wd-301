export interface TaskItem {
  deleteTask(title: string): void;
  title: string;
  desc: string;
  dueDate: any;

}
// default export TaskItem
