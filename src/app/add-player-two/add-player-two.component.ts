import { Component, OnInit } from '@angular/core';
import {PlayerService} from 'src/app/player.service'
import { Player } from 'src/app/player.model'; 
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-add-player-two',
  templateUrl: './add-player-two.component.html',
  styleUrls: ['./add-player-two.component.css']
})
export class AddPlayerTwoComponent implements OnInit {

  constructor(private router: Router, public playerService: PlayerService) { }
  players: Player[]; 
  ngOnInit(): void {
  }

  onSubmit(){
   
    let data = this.playerService.addPlayerTwoForm.value; 
    this.playerService.addNewPlayer(data)
    .then(res=>{

    })
    this.router.navigate(['/selectType'])
  }

}
