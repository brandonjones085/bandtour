import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { interval } from 'rxjs'; 
import { PlayerService } from '../player.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})

export class FinalComponent implements OnInit {

  constructor(private location: PlatformLocation, private router: Router, public playerService: PlayerService) { 
    // preventing back button in browser implemented by "Samba Siva"  
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigateByUrl("/welcome", {skipLocationChange: true})
    })
  }

  streetCred;  
  fin = false; 
  health="Good"; 
  totalPoints; 
  players; 
  i; 

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

  playAgain(){
    this.playerService.deleteDoc(); 
    this.router.navigateByUrl('/welcome', {skipLocationChange: true}); 
  }

}
