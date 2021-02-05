import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
tasks:object={}
allTasks:Array<Object>=[]
body:Object={}
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getTasks().subscribe((data)=>{
      this.tasks=data
      console.log(data);
  });
  }
  addOneTask(){
    this.http.addTasks(this.body).subscribe((data)=>console.log(data)
    )
  }
  deleteOneTask(id:Number){
    this.http.deleteTasks(id).subscribe((data)=>console.log(data)
    )
  }
  updateOneTask(id:Number){
    this.http.UpdateTasks(id).subscribe((data)=>console.log(data)
    )
  }
}
