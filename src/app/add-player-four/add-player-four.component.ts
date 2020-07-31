import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlayerService} from 'src/app/player.service'
import { Player } from 'src/app/player.model'; 


@Component({
  selector: 'app-add-player-four',
  templateUrl: './add-player-four.component.html',
  styleUrls: ['./add-player-four.component.css']
})
export class AddPlayerFourComponent implements OnInit {

  constructor(private router: Router, public playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.updateCurrent("/addplayerfour")
  }

  onSubmit(){
    let data = this.playerService.addPlayerFourForm.value; 
    this.playerService.addNewPlayerFour(data)
    
    .then(res=>{

    })
    this.router.navigate(['/selectType'], {skipLocationChange: true})

  }

}
