import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

import { interval } from 'rxjs'; 
import { PlayerService } from '../player.service';



@Component({
  selector: 'app-first-stop',
  templateUrl: './first-stop.component.html',
  styleUrls: ['./first-stop.component.css'], 

})



export class FirstStopComponent implements OnInit {

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
  constructor(private router: Router, public playerService: PlayerService) { }

  ngOnInit():void{
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
   
    this.start();     
     
  }
  
  @Input() init:string; 
  public value:string = ""; 




  start(){

    this.value = this.playerService.play(); 
   const sub = interval(3000).subscribe(x=>{
    
     this.one(); 
    sub.unsubscribe(); 
   })
   
  }

  one(){ 
    this.value = this.playerService.play(); 
    const sub = interval(3000).subscribe(x=>{
      this.value = "Shlomo took bathsalts and was left in the desert"
      
      this.two(); 
      sub.unsubscribe(); 
    })
    
    
   }


   two(){
    this.value = this.playerService.play(); 
    
    const sub = interval(3000).subscribe(x=>{
      this.value = "Shlomo took bathsalts and was left in the desert"
      this.done=true; 
      sub.unsubscribe(); 
    })
 

   }
  
   viewSupplies(){
    this.router.navigate(['/viewSupplies'])

   }

   playShow(){
    this.router.navigate(['/choice'])

   }

   next(){
    this.router.navigate(['/phoenix'])
   }


}
