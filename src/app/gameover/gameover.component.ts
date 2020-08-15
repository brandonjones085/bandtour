import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import {Router } from '@angular/router'; 

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  constructor(private location: PlatformLocation, private router: Router) { 
    // preventing back button in browser implemented by "Samba Siva"  
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigateByUrl("/welcome", {skipLocationChange: true})
    })
  }

  ngOnInit(): void {
  }

}
