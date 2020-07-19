import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { IpServiceService} from 'src/app/ip-service.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private ip: IpServiceService) { }
  ipAddress:string; 


  ngOnInit(): void {
    this.getIP()
  }

  getIP(){

    this.ip.getIpAddress().subscribe((res:any)=>{
      this.ipAddress=res.ip; 
  
    })
  }

  start(){
    this.router.navigate(['/start'])
  }

}
