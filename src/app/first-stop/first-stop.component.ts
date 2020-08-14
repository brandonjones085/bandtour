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
  public valueOne: string =""; 




  start(){

    this.value = this.playerService.play(); 
   const sub = interval(3000).subscribe(x=>{
    
    this.one(); 

    if(this.playerService.gameOver === true){
      this.router.navigate(['/gameover'], {skipLocationChange: true})
    }

    sub.unsubscribe(); 
   })
   
  }

  one(){ 
    this.value = this.playerService.play(); 
    const sub = interval(3000).subscribe(x=>{
    
      this.value = "Shlomo took bathsalts and was left in the desert"
      
      this.two(); 
      if(this.playerService.gameOver === true){
        this.router.navigate(['/gameover'], {skipLocationChange: true})
      }
      sub.unsubscribe(); 
    })
    
    
   }


   two(){
    this.value = this.playerService.play(); 
    
    const sub = interval(3000).subscribe(x=>{
      this.value = "Shlomo took bathsalts and was left in the desert"

      if(this.playerService.gameOver === true){
        this.router.navigate(['/gameover'], {skipLocationChange: true})
      }
      this.done=true; 
      sub.unsubscribe(); 
    })
 

   }
  
   playShow(){
    
   this.valueOne = this.playerService.playShow(); 

    const sub = interval(4000).subscribe(x=>{
      if(this.playerService.gameOver === true){
        this.router.navigate(['/gameover'], {skipLocationChange: true})
      }
      this.goToNext(); 
      sub.unsubscribe(); 
    })
    
    
   }


   goToNext(){
    this.router.navigate(['/phoenix'], {skipLocationChange: true})
   }


}
