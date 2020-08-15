import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PlayerService } from '../player.service';
import {Howl} from 'howler'
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(private location: PlatformLocation, private router: Router, public playerService: PlayerService) { 
    // preventing back button in browser implemented by "Samba Siva"  
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigateByUrl("/welcome", {skipLocationChange: true})
    })
  }

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
