import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PlayerService } from '../player.service';
import {Howl} from 'howler'

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(private router: Router, public playerService: PlayerService) { }

  sound1 = new Howl({
    src: ["../../assets/audio/alright.wav"], html5: true
  })

  ngOnInit(): void {
    this.playerService.updateCurrent("/choice"); 
  }

  start(){
    this.sound1.play()
    this.router.navigate(['/first'], {skipLocationChange: true})
  }

  supplies(){
    this.router.navigate(['/supplies'], {skipLocationChange: true})
  }

}
