import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name="ravi"
  //declaring variable for demoing pipis
  //name="abhishek"
  //creating object for demoing json pipe
  public person ={
    "firstname":"abhishek",
    "lastname":"Ghosh"
  }

}
