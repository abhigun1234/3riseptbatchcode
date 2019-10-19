import { Component, OnInit } from '@angular/core';
import {user} from './/user'
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  name="abhishek"
  userModel=new user("123",'kkk','abh')
  dob=new Date(1982,12,2)
  salary=1000
  constructor() { }

  ngOnInit() {
  }

}
