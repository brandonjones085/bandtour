import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { interval } from 'rxjs'; 
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private router: Router, public playerService: PlayerService) { }

  streetCred;  
  fin = false; 
  health="Good"; 
  cash 
  burritos = 0; 
  jerky = 0; 
  sardines = 0; 
  shirts = 0; 
  nachos = 0; 
  players; 
  i = 0;
  done=false; 
  num; 
  
  ngOnInit(): void {
    this.playerService.updateCurrent("/first")
    this.playerService.getPlayer().subscribe(data=>{
      this.players = data.map(e=>{
        return{
          id: e.payload.doc.id, 
          ...e.payload.doc.data() as any
        }
      })

      //loops through db looking at IP,
      //if found, will restore old session; 
      for (this.i = 0; this.i < this.players.length; this.i++){
        if((this.players[this.i].id) === this.playerService.playerid){
          this.players=this.players[this.i]
        }
      }
    })
  }

}
