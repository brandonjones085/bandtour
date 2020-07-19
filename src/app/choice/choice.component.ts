import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(private router: Router, public playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.updateCurrent("/choice"); 
  }

  start(){
    this.router.navigate(['/first'])
  }

  supplies(){
    this.router.navigate(['/supplies'])
  }

}
