import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/player.service'; 
import { Player } from 'src/app/player.model'; 
import { Router } from '@angular/router'; 
import { IpServiceService} from 'src/app/ip-service.service'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  players: Player[]; 
  playerId: string; 
  ipAddress: string; 
  constructor(public playerService: PlayerService, private router: Router, private ip: IpServiceService) { }

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
    this.playerService.getIP(this.ipAddress);
    this.playerService.form.setValue({ip: this.ipAddress, id: 1, name: "test", health: 100, streetCred: 0})
    let one = this.playerService.form.value; 
    this.playerService.createPlayer(one)
    .then(res=>{

      
    })
    this.router.navigate(['/addplayertwo'])
   
  }

}
