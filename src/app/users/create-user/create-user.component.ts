import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../users.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  request: RequestCreate ={
    name:'',
    job:''
  }
  response : ResponseCreate;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  save(){
    if(this.request.name !="" && this.request.job){
      this.userService.createUser(this.request)
      .subscribe(res=>{
        this.response = res;
      });
    }
  }
}
