import { Component, Pipe } from '@angular/core';
import { FilterPipePipe } from '../app/filter-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  queryString: any;

  students: any = [
    { "name": "Wisam", "age": 13 , "DOB": new Date(2000, 1, 29).toDateString() },
    { "name": "Ali", "age": 34 , "DOB": new Date(2001, 1, 15).toDateString() },
    { "name": "Mahmood", "age": 15, "DOB": new Date(1999, 6, 3).toDateString() }
  ];

  addStudent(name: string, age: any, dob: any): void {
    let dOB = new Date(dob);
    this.students.push(
      {
        "name": name,
        "age": age,
        "DOB": dOB.toDateString()
      }
    ); 
  }
}
