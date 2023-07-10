import { Injectable } from '@angular/core';
import { Task } from './models/task.models';



@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks: Task[] = []; // array para almacenar las tareas //

  constructor() { }

   // Método para obtener las tareas
  getTasks(): Task[] {
    return this.tasks;
  }
// Método para obtener una tarea por su ID
getTaskById(id: number): Task | undefined {
  return this.tasks.find(task => task.id === id);
}

   // Método para crear una nueva tarea
  createTask(task: Task): void {
    this.tasks.push(task);
  }

   // Método para editar una tarea existente
  editTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }
 // Método para eliminar una tarea
  deleteTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }


}



