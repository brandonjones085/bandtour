import { Component, OnInit, HostListener } from '@angular/core';
import { PlayerService } from 'src/app/player.service'; 
import { Player } from 'src/app/player.model'; 
import { Router } from '@angular/router'; 
import { IpServiceService} from 'src/app/ip-service.service'
import { PlatformLocation } from '@angular/common';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {
  
  players: Player[]; 
  playerId: string; 
  ipAddress: string; 
  newUser: true; 
  current: "/start"; 
  constructor(public playerService: PlayerService, private router: Router, private ip: IpServiceService, private location: PlatformLocation) { 
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigateByUrl("/welcome", {skipLocationChange: true})
    })
  }

  ngOnInit(): void{
    this.getIP(); 
 
    this.playerService.getPlayer().subscribe(data=>{
      this.players = data.map(e=>{
        return{
          id: e.payload.doc.id, 
          ...e.payload.doc.data() as Player
        }
      })
    })
  }


  //gets client IP for database 
  getIP(){
    this.ip.getIpAddress().subscribe((res: any)=>{
      this.ipAddress = res.ip; 
    })
  }

  delete = data =>{this.playerService.deletePlayer(data)}

  onSubmit(){
   
    let one = this.playerService.form.value; 
    one.ip = this.ipAddress;  
    one.current = "/start"; //used to track users state
    this.playerService.createPlayer(one)
    .then(res=>{
      this.playerService.sendIP(this.ipAddress); 
      
    })

    
    this.router.navigate(['/addplayertwo'], {skipLocationChange: true})
   
  }

}
