import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; 
import { Player } from 'src/app/player.model'; 
import { FormControl, FormGroup } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: AngularFirestore) { }
  playerid: string 
  playerCash: number
  private ip: string; 

  public getIP(v){
    this.ip = v; 

  }

  returnIP(){
    return this.ip
  }

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
    ip: new FormControl(),
    id: new FormControl(), 
    name: new FormControl(), 
    health: new FormControl(), 
    streetCred: new FormControl()
  })

  addPlayerTwoForm = new FormGroup({
    id: new FormControl(2),
    two: new FormControl(" "), 
    health: new FormControl(100)
  })

  addPlayerThreeForm = new FormGroup({
    id: new FormControl(3),
    name: new FormControl(" "), 
    health: new FormControl(100)
  })

  addPlayerFourForm = new FormGroup({
    id: new FormControl(4),
    name: new FormControl(" "), 
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
    burritos: new FormControl()
  })

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

}
