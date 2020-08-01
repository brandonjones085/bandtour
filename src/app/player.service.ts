import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; 
import { Player } from 'src/app/player.model'; 
import { FormControl, FormGroup } from '@angular/forms'; 
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: AngularFirestore) { }
  playerid: string 
  playerCash: number
  burritos: number
  jerky: number 
  sardines: number 
  nachos: number 
  shirts: number 
  player



  deletePlayer(data){
    return this.firestore.collection("player").doc(data.id).delete(); 
  }

  getPlayer(){
    return this.firestore.collection("player").snapshotChanges();
  }



  createPlayer(one){
    return new Promise<any>((resolve, reject)=>{

      this.firestore
      .collection("player")
        .add({one})
        .then(res=> {
          this.playerid = res.id
        }, err=>reject(err)); 
     
    })
  }

  form = new FormGroup({
    ip: new FormControl(""), 
    id: new FormControl(1), 
    name: new FormControl(" "), 
    health: new FormControl(100), 
    streetCred: new FormControl(0),
    current: new FormControl("")
  })



  addPlayerTwoForm = new FormGroup({
    id: new FormControl(2),
    two: new FormControl(" "), 
    health: new FormControl(100)
  })

  addPlayerThreeForm = new FormGroup({
    id: new FormControl(3),
    three: new FormControl(" "), 
    health: new FormControl(100)
  })

  addPlayerFourForm = new FormGroup({
    id: new FormControl(4),
    four: new FormControl(" "), 
    health: new FormControl(100)
  })

  addPlayerFiveForm = new FormGroup({
    id: new FormControl(5),
    name: new FormControl(" "), 
    health: new FormControl(100)
  })

  selectTypeForm = new FormGroup({
    type: new FormControl(" "), 
    cash: new FormControl()
  })

  suppliesForm = new FormGroup({
    burritos: new FormControl(), 
    jerky: new FormControl(), 
    nachos: new FormControl(), 
    sardines: new FormControl(), 
    shirts: new FormControl()
  })

  sendIP(ip){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/' + this.playerid).update({ip})
      .then(res=>{

      }, err=>reject(err))
    })
    
  }

  addSupplies(supplies){
    return new Promise<any>((resolve, reject)=>{
      this.playerCash = supplies.cash; 
      console.log(this.playerCash); 
      this.firestore.doc('player/'+this.playerid).update({supplies})
      .then(res=>{

      }, err=>reject(err)); 
    })
  }

  addNewPlayer(two){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({two})
      .then(res=>{

      }, err=>reject(err)); 
    })
  }

  addNewPlayerThree(three){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({three})
      .then(res=>{

      }, err=>reject(err)); 
    })
  }

  addNewPlayerFour(four){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({four})
      .then(res=>{

      }, err=>reject(err)); 
    })
  }

  selectType(type){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({type})
      .then(res=>{

      }, err=>{reject(err)}); 
    })

  }

  updateCash(newTotal){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({"type.cash" : newTotal})
    })
  }

  updateCurrent(com){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({"one.current" : com}); 
    })
  }
  p: Player; 

  getp(){
      return this.firestore.collection("player").doc(this.playerid).snapshotChanges(); 
  }

  //queries for the player using this.player id which is passed
  async getPlay(docId:string){
    let document = await this.firestore.collection('player').doc(docId).get().toPromise();
    this.player = document.data()
   
  }
     

  //The majority of the game logic is here
  play(){


    const disasterDict = [
    {action: " got scabes", points: 10}, 
    {action: " got diarrhea from eating rotten food", points: 10}, 
    {action: " took bathsalts and was left behind", points: 100}, 
    {action: " got staph infection from a stick 'n poke", points: 20}, 
    {action: " got boot rot from not changing socks", points: 20}
  ]

    this.getPlay(this.playerid)
    let statement=""; 
    let name; 
    let player; 
    let totalHealth; 
    const num = Math.floor(Math.random() * 4)
    const num1 = Math.floor(Math.random() * 4)
    console.log(num); 
    if (this.player){
      if(num === 0){
        name = this.player.one.name; 
        player = this.player.one
      }else if(num === 1){
        name = this.player.two.two; 
        player = this.player.one
      }else if(num === 2){
        name = this.player.three.three
        player = this.player.one
      }else{
        name = this.player.four.four
        player = this.player.one
      }
    
    statement = name; 


    statement += disasterDict[num1].action; //returns the whole statment which is printed to the screen; 
  }
    if (this.checkIfGameOver(totalHealth) === "over"){
      statement = "over"
    }

    return statement; 
  }
    

  checkIfGameOver(total){
    if (total <= 0){
      return "over"; 
    }
  }
  

}
