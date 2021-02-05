import { Component, OnInit,Input, NgModule,ViewChild, ElementRef  } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('Name') Name: ElementRef;
  @ViewChild('Email') Email: ElementRef;
  @ViewChild('Moblie') Moblie: ElementRef;
  @ViewChild('Tasks') Tasks: ElementRef;
  @ViewChild('Location') Location: ElementRef;

tasks:object={}
// allTasks:Array<Object>=[]
// Name:String="empty"
// Email:String="empty"
// Moblie:String="empty"
// Task:String="empty"
// Location:String="empty"

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getTasks().subscribe((data)=>{
      this.tasks=data
      console.log(data);
  });
  }
  addPlayer() {
    // you can access the input value via the following syntax.
    this.Name=this.nameInput.nativeElement.value
    console.log('player name: ', this.nameInput.nativeElement.value);
  }
  onKey(event) { this.Name = event.target.value; console.log(this.Name);
  }
  addOneTask(){
    this.Name=this.Name.nativeElement.value
    this.Email=this.Email.nativeElement.value
    this.Moblie=this.Moblie.nativeElement.value
    this.Tasks=this.Tasks.nativeElement.value
    this.Location=this.Location.nativeElement.value
     let body:Object= {
      first_name: this.Name,
      email: this.Email,
      mobile: this.Moblie,
      communication:this.Tasks,
      location_type: this.Location,
      location_string: this.Location,
    }
    this.http.addTasks({
      first_name: this.Name,
      email: this.Email,
      mobile: this.Moblie,
      communication:this.Task,
      location_type: this.Location,
      location_string: this.Location,
    }).subscribe((data)=>console.log(data)
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
    this.http.UpdateTasks(id,this.body).subscribe((data)=>console.log(data)
    )
    this.ngOnInit()
    alert(`task with id ${id} updated`)

  }
}
