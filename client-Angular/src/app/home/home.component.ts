import { Component, OnInit,Input } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
tasks:object={}
allTasks:Array<Object>=[]
body:Object= {
  id: "newId",
  first_name: "first_name",
  last_name: "last_name",
  email: "email",
  mobile: "mobile",
  location_type: "location_type",
  location_string: "location_string",
}
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
    alert("one task added")
  }
  deleteOneTask(id:Number){
    this.http.deleteTasks(id).subscribe((data)=>console.log(data)
    )
    alert(`task with id ${id} deleted`)

  }
  updateOneTask(id:Number){
    this.http.UpdateTasks(id).subscribe((data)=>console.log(data)
    )
    alert(`task with id ${id} updated`)

  }
}
