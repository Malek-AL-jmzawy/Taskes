import { Component, OnInit,Input, NgModule } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
tasks:object={}
allTasks:Array<Object>=[]
Name:String="empty"
Email:String="empty"
Moblie:String="empty"
Task:String="empty"
Location:String="empty"
body:Object= {
  first_name: this.Name,
  email: this.Email,
  mobile: this.Moblie,
  communication:this.Task,
  location_type: this.Location,
  location_string: this.Location,
}
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getTasks().subscribe((data)=>{
      this.tasks=data
      console.log(data);
  });
  }
  onKey(event) { this.Name = event.target.value; console.log(this.Name);
  }
  addOneTask(){
    this.http.addTasks(this.body).subscribe((data)=>console.log(data)
    )
    this.ngOnInit()
    alert("one task added")
  }
  deleteOneTask(id:Number){
    this.http.deleteTasks(id).subscribe((data)=>console.log(data)
    )
        this.ngOnInit()
    alert(`task with id ${id} deleted`)

  }
  updateOneTask(id:Number){
    this.http.UpdateTasks(id).subscribe((data)=>console.log(data)
    )
    this.ngOnInit()
    alert(`task with id ${id} updated`)

  }
}
