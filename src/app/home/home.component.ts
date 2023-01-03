import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  etudiants : number = 322;
  dir:any ={prenom:'Adrien'};
  user : User ={id : 1,name : 'John',email : 'john@gmail.com'}
  user1 : User ={id : 2,name : 'Messi',email : 'messi@gmail.com'}
  user2 : User ={id : 3,name : 'Xavi',email : 'xavi@gmail.com'}
  user3 : User ={id : 4,name : 'Iniesta',email : 'iniesta@gmail.com'}
  quantites:User[]=[this.user,this.user1,this.user2,this.user3]
  afficheMessage(message:string):void{
    alert("mon message :" + message);
  }
  afficheMessage1(message:string,event:any):void{
    alert("mon message :" + message);
    event.preventDefault();
    event.stopPropagation();
  }
  data: any[] = [{
    "id": 1,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
      "libelle":"lib1",
      "description":"desc1"
      },
      {
      "libelle":"lib1",
      "description":"desc1"
      }
  ]
  },
  {
    "id": 2,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
      "libelle":"lib1",
      "description":"desc1"
      },
      {
      "libelle":"lib1",
      "description":"desc1"
      }
  ]
  }]

}