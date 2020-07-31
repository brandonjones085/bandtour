import { Component, OnInit } from '@angular/core';
import {PlayerService} from 'src/app/player.service'
import { Player } from 'src/app/player.model'; 
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-add-player-three',
  templateUrl: './add-player-three.component.html',
  styleUrls: ['./add-player-three.component.css']
})
export class AddPlayerThreeComponent implements OnInit {

  constructor(private router: Router, public playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.updateCurrent("/addplayerthree")
  }

  onSubmit(){
    let data = this.playerService.addPlayerThreeForm.value; 
    this.playerService.addNewPlayerThree(data)
    
    .then(res=>{

    })
    this.router.navigate(['/addplayerfour'], {skipLocationChange: true})
  }

}
