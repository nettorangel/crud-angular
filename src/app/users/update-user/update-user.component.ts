import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate, ResponseUpdate } from '../users.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  id:string;
  request: RequestUpdate;
  response : ResponseUpdate;
  constructor(private UserService:UserService , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.UserService.getUser(this.id)
    .subscribe(res =>{
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      }
    })
  }
  update(){
    if(this.request.name !="" && this.request.job){
      this.UserService.updateUser(this.id,this.request).subscribe(res =>{
        this.response = res;
      })
  }
  }

}
