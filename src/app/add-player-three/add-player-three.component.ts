import { Component, OnInit } from '@angular/core';
import {PlayerService} from 'src/app/player.service'
import { Player } from 'src/app/player.model'; 
import {Router} from '@angular/router'; 
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-add-player-three',
  templateUrl: './add-player-three.component.html',
  styleUrls: ['./add-player-three.component.css']
})
export class AddPlayerThreeComponent implements OnInit {

  constructor(private location: PlatformLocation, private router: Router, public playerService: PlayerService) {
    location.onPopState(()=>{
      
      this.router.navigate(["/welcome"], {skipLocationChange: true})
    })
   }

  ngOnInit(): void {
   
    this.playerService.updateCurrent("/addplayerthree")
  }
  error = false; 
  onSubmit(){
    this.error = false;
    let data = this.playerService.addPlayerThreeForm.value; 
    if (data.three === "" || data.three === " " || data.three === "  " || data.three === "    "){
      this.error = true; 
  }else{
    this.playerService.addNewPlayerThree(data)
    
    .then(res=>{

    })
    this.router.navigate(['/addplayerfour'], {skipLocationChange: true})
  }
  }
}
