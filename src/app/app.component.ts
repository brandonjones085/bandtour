import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'band';
  sound = new Howl({
    src: ["../assets/audio/bensound-jazzyfrenchy.mp3"], html5: true
  })

  ngOnInit(){
  
   
  }
}
