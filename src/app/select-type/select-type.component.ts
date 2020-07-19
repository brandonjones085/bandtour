import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/player.model'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.css']
})
export class SelectTypeComponent implements OnInit {

  constructor(public playerService: PlayerService, private router: Router) { }



  ngOnInit(): void {
  }


  onSubmit(){
    
    let type = this.playerService.selectTypeForm.value; 
    
    if(type.type === "pop")
    {
      type.cash = 1000
    }else if(type.type === "ska"){
      type.cash = 500
    }else if(type.type === "gut"){
      type.cash = 100
    }
    this.router.navigate(['/supplies']); 
    this.playerService.selectType(type)
    .then(res=>{

    })
    

  }

}
