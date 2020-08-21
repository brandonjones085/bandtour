import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

import { interval } from 'rxjs'; 
import { PlayerService } from '../player.service';
import { PlatformLocation } from '@angular/common';
import { Howl } from 'howler';

@Component({
  selector: 'app-houston',
  templateUrl: './houston.component.html',
  styleUrls: ['./houston.component.css']
})
export class HoustonComponent implements OnInit {

  
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
  paulwall=true; 
  num; 

  paul = new Howl({
    src: ["../../assets/audio/paul.mp3"], html5: true
  })

  constructor( private location: PlatformLocation, private router: Router, public playerService: PlayerService) { 
    // preventing back button in browser implemented by "Samba Siva"  
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigate(["/welcome"], {skipLocationChange: true})
    })
  }

  ngOnInit():void{
    this.playerService.updateCurrent("/houston")
    
   
   
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

      if(this.paulwall){//paul wall appears
        this.paul.play()
      }

      this.done=true; 
      sub.unsubscribe(); 
    })
  

   }
  
   public valueOne: string =""; 
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
     this.paul.stop()
    this.router.navigate(['/orleans'], {skipLocationChange: true})
   }

}
