import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { IpServiceService} from 'src/app/ip-service.service'
import { PlayerService } from 'src/app/player.service'; 
import { Player } from 'src/app/player.model'; 
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; 
import {Howl} from 'howler'
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private ip: IpServiceService, private router: Router, private playerService: PlayerService, private location: LocationStrategy) { 
   // preventing back button in browser implemented by "Samba Siva"  
 history.pushState(null, null, window.location.href);  
 this.location.onPopState(() => {
   history.pushState(null, null, window.location.href);
 });  
  }
  
  loadStart = false; 
  userId: string; 
  current: string; 
  ipAddress:string; 
  i: number
  players: any; 
  newUser = true; 
  sound = new Howl({
    src: ["../../assets/audio/bensound-jazzyfrenchy.mp3"], html5: true, loop: true
  })

  ngOnInit(): void {
    
    //used to control the background music
    // while(this.playerService.backgroundSound){
    //   // this.sound.play()
    // }
    
    this.getIP(); 

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
        if((this.players[this.i].one.ip) === this.ipAddress){
          this.newUser = false; //resume button triggered
          this.playerService.playerid = this.players[this.i].id;   
          this.current = this.players[this.i].one.current; 
        
        }
      }
     
    })
    console.log("YO")
  }


  //gets client IP for database 
  getIP(){
    this.ip.getIpAddress().subscribe((res: any)=>{
      this.ipAddress = res.ip; 
    })
  }

  resume(){
    this.router.navigate([this.current], {skipLocationChange: true})
  }

  start(){
    
    this.loadStart = true; 
    this.router.navigate(['/start'], {skipLocationChange: true})
  }

}
