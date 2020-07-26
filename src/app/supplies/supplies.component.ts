import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PlayerService } from 'src/app/player.service'
import {Player} from 'src/app/player.model'; 

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

 
  constructor(private router: Router, public playerService: PlayerService) { }
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

    this.playerService.updateCurrent("/supplies"); 

  }
  
  

  onSubmit(){

    let stuff = this.playerService.suppliesForm.value; 
    let totBur = stuff.burritos * 5; 
    let totJer = stuff.jerky * 5; 
    let totNac = stuff.nachos * 5; 
    let totSar = stuff.sardines * 5; 
    let totShi = stuff.shirts * 5; 

    let total = totBur + totJer + totNac + totSar + totShi; 
    if (total > this.cash){
      this.valid = false; 
    }
    else{
      this.playerService.addSupplies(stuff)
      let newTotal = this.cash - total
      this.playerService.updateCash(newTotal)
  
    .then(res=>{})
    this.router.navigate(['/choice'], {skipLocationChange: true})
    }

    

    

  }

}
