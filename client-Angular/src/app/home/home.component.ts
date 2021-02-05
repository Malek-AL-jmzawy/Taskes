import { Component, OnInit,Input, NgModule,ViewChild, ElementRef  } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('Name') Name: ElementRef;
  @ViewChild('Email') Email: ElementRef;
  @ViewChild('Moblie') Moblie: ElementRef;
  @ViewChild('Tasks') Tasks: ElementRef;
  @ViewChild('Location') Location: ElementRef;

isAdd:Boolean=true
tasks:object={}
body:object={}
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getTasks().subscribe((data)=>{
      this.tasks=data
      console.log(data);
  });
  }
  openAdd(){
    this.isAdd?(this.isAdd=false):(this.isAdd=true)
    

  }
  addOneTask(){

     let body:Object= {
      first_name: this.Name.nativeElement.value,
      email: this.Email.nativeElement.value,
      mobile: this.Moblie.nativeElement.value,
      communication:this.Tasks.nativeElement.value,
      location_string: this.Location.nativeElement.value,
    } 
    this.http.addTasks(body).subscribe((data)=>console.log(data)
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
    let body:Object= {
      communication:this.Tasks.nativeElement.value,
    }
    this.http.UpdateTasks(id,body).subscribe((data)=>console.log(data)
    )
    this.ngOnInit()
    alert(`task with id ${id} updated`)
  }
}
