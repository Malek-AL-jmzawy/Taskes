import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {}
    getTasks(){
      return this.http.get("http://localhost:4000/tasks")
      }

      addTasks(body:Object){
        return this.http.post("http://localhost:4000/tasks",body)
        }
        deleteTasks(id:Number){
          return this.http.delete(`http://localhost:4000/tasks/${id}`)
          }
          UpdateTasks(id:Number,body:Object){
            return this.http.put(`http://localhost:4000/tasks/${id}`,body)
            }
}
