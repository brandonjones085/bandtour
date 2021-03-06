import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PlayerService } from 'src/app/player.service'
import {Player} from 'src/app/player.model'; 
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-n-supplies',
  templateUrl: './n-supplies.component.html',
  styleUrls: ['./n-supplies.component.css']
})
export class NSuppliesComponent implements OnInit {
  constructor(private location: PlatformLocation, private router: Router, public playerService: PlayerService) {
    // preventing back button in browser implemented by "Samba Siva"  
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigate(["/nashville"], {skipLocationChange: true})
    })
   }
   
  players: any; 
  cash: number; 
  valid = true; 
  ngOnInit(): void {
    
    this.playerService.getPlayer().subscribe(data=>{
      this.players = data.map(e=>{
        return{
          id: e.payload.doc.id, 
          ...e.payload.doc.data() as any
        }
       
      })
      this.cash = this.players[0].type.cash; 
    })

    this.playerService.updateCurrent("/nSupplies"); 

  }
  
  

  onSubmit(){

    let stuff = this.playerService.suppliesForm.value; 
    let totBur = stuff.burritos * 5; 
    let totJer = stuff.jerky * 5; 
    let totNac = stuff.nachos * 5; 
    let totSar = stuff.sardines * 5; 
    let totShi = stuff.shirts * 10; 

    let total = totBur + totJer + totNac + totSar + totShi; 
    if (total > this.cash){
      this.valid = false; 
    }
    else{
      this.playerService.addSupplies(stuff)
      let newTotal = this.cash - total
      this.playerService.updateCash(newTotal)
  
    .then(res=>{})
    this.router.navigate(['/chicago'], {skipLocationChange: true})
    }


  }

}