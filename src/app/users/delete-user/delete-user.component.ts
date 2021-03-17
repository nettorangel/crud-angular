import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';
import { UserService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  
  id:string;
  user:User;

  constructor(private UserService:UserService , private route:ActivatedRoute, private _route:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.UserService.getUser(this.id)
    .subscribe(res =>{
      this.user = res.data;
    })
  }
  delete(){
    this.UserService.deleteUser(this.id).subscribe(res =>{     
      this._route.navigate(['/users'])
      alert('Removido com sucesso')
    })
  }
  cancel(){
    this._route.navigate(['/users'])
  }
}
