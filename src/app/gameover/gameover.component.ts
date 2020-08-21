import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import {Router } from '@angular/router'; 
import {PlayerService} from 'src/app/player.service'

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  constructor(public playerService: PlayerService,private location: PlatformLocation, private router: Router) { 
    // preventing back button in browser implemented by "Samba Siva"  
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigate(["/welcome"], {skipLocationChange: true})
    })
  }

  ngOnInit(): void {
  }

  playAgain(){
    this.router.navigate(['/welcome'], {skipLocationChange: true}); 
    this.playerService.deleteDoc(); 
    
  }

}
