import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user : User ={id : 1,name : 'John',email : 'john@gmail.com'}
  user1 : User ={id : 2,name : 'Messi',email : 'messi@gmail.com'}
  user2 : User ={id : 3,name : 'Xavi',email : 'xavi@gmail.com'}
  user3 : User ={id : 4,name : 'Iniesta',email : 'iniesta@gmail.com'}
  quantites:User[]=[this.user,this.user1,this.user2,this.user3]

  constructor(private router: Router){}
  getUserDetails(userId : number){
    this.router.navigate(['/users',userId])
  }


}
