import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/player.model'; 
import {Router} from '@angular/router'; 
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.css']
})
export class SelectTypeComponent implements OnInit {

  constructor(private location: PlatformLocation, public playerService: PlayerService, private router: Router) { 
    // preventing back button in browser implemented by "Samba Siva"  
    location.onPopState(()=>{
      console.log("PRESSED BACK"); 
      this.router.navigateByUrl("/welcome", {skipLocationChange: true})
    })
  }



  ngOnInit(): void {
    this.playerService.updateCurrent("/selectType"); 
  }

  error = false; 
  onSubmit(){
    this.error = false; 
    let type = this.playerService.selectTypeForm.value; 

    if(type.type === "")
    {
      this.error = true; 
    }else{
      if(type.type === "pop")
    {
      type.cash = 1000
    }else if(type.type === "ska"){
      type.cash = 500
    }else if(type.type === "gut"){
      type.cash = 100
    }
    this.router.navigate(['/supplies'], {skipLocationChange: true}); 
    this.playerService.selectType(type)
   
    .then(res=>{

    })

    }
    
    
    

  }

}
