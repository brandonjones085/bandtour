import { Component, OnInit } from '@angular/core';
import {PlayerService} from 'src/app/player.service'
import { Player } from 'src/app/player.model'; 
import {Router} from '@angular/router'; 
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-add-player-two',
  templateUrl: './add-player-two.component.html',
  styleUrls: ['./add-player-two.component.css']
})
export class AddPlayerTwoComponent implements OnInit {

  constructor(private router: Router, public playerService: PlayerService, private location: PlatformLocation) { 
      // preventing back button in browser implemented by "Samba Siva"  
      location.onPopState(()=>{
        console.log("PRESSED BACK"); 
        this.router.navigateByUrl("/welcome", {skipLocationChange: true})
      })
  }
  players: Player[]; 
  ngOnInit(): void {
    this.playerService.preventBackButton(); 
    this.playerService.updateCurrent("/addplayertwo")
  }
error = false; 
  onSubmit(){
   this.error = false; 
    let data = this.playerService.addPlayerTwoForm.value; 
    if (data.two === "" || data.two === " " || data.two === "  " || data.two === "    "){
      this.error = true; 
  }else{
    this.playerService.addNewPlayer(data)
    
    .then(res=>{

    })
    this.router.navigate(['/addplayerthree'], {skipLocationChange: true})
  }
}

}
