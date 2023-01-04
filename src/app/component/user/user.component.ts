import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Service qui permet de recuperer le paramètre dans la route appelée

  constructor(private route : ActivatedRoute){}

  // methode du cycle de vie d'un composant 
  //methode appelée à l'initialisation du composant 

// methode à charger à l'appel du 
//composant et initialiser le composoant avec ce qu'on a mit à l'intérieur 
  ngOnInit(){ 

    //Methode synschrone 
    const id = this.route.snapshot.params["userId"];
    console.log(id);
  }

}
