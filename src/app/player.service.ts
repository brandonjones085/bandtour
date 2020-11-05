import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; 
import { Player } from 'src/app/player.model'; 
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators'
import * as firebase from 'firebase'; 
import { LocationStrategy } from '@angular/common';
import {Howl} from 'howler'


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private firestore: AngularFirestore, private locationStrategy: LocationStrategy) { }
  playerid: string 
  playerCash: number
  burritos: number
  jerky: number 
  sardines: number 
  nachos: number 
  shirts: number 
  player
  health: string; 
  streetCred: number; 
  totalHealth: number
  gameOver= false; 
  backgroundSound = true; 

  excel = new Howl({
    src: ["../../assets/audio/excel.mp3"], html5: true
  })

  nodice = new Howl({
    src: ["../../assets/audio/nodice.mp3"], html5: true
  })

  noway = new Howl({
    src: ["../../assets/audio/noway.mp3"], html5: true
  })

  wha = new Howl({
    src: ["../../assets/audio/wha.mp3"], html5: true
  })

// Define a function to handle back button and use anywhere
preventBackButton() {
  history.pushState(null, null, location.href);
  this.locationStrategy.onPopState(() => {
    history.pushState(null, null, location.href);
  })
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
    name: new FormControl("", [Validators.required, Validators.minLength(2)]), 
    health: new FormControl(100), 
    streetCred: new FormControl(0),
    current: new FormControl(""), 
    alive: new FormControl(true)
  })



  addPlayerTwoForm = new FormGroup({
    id: new FormControl(2),
    two: new FormControl("", [Validators.required]), 
    health: new FormControl(100), 
    alive: new FormControl(true)
  })

  addPlayerThreeForm = new FormGroup({
    id: new FormControl(3),
    three: new FormControl("", [Validators.required]),  
    health: new FormControl(100), 
    alive: new FormControl(true)
  })

  addPlayerFourForm = new FormGroup({
    id: new FormControl(4),
    four: new FormControl("", [Validators.required]), 
    health: new FormControl(100), 
    alive: new FormControl(true)
  })

  addPlayerFiveForm = new FormGroup({
    id: new FormControl(5),
    name: new FormControl(""), 
    health: new FormControl(100)
  })

  selectTypeForm = new FormGroup({
    type: new FormControl("", [Validators.required]), 
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


  updateOneHealth(newHealth){
    return new Promise<any>((resolve, reject)=>{
  
      this.firestore.doc('player/'+this.playerid).update({ "one.health" : newHealth})
    })
  }

  updateTwoHealth( newHealth){
    return new Promise<any>((resolve, reject)=>{

      this.firestore.doc('player/'+this.playerid).update({ "two.health" : newHealth})
    })
  }

  updateThreeHealth(newHealth){
    return new Promise<any>((resolve, reject)=>{
   
      this.firestore.doc('player/'+this.playerid).update({ "three.health" : newHealth})
    })
  }

  updateFourHealth( newHealth){
    return new Promise<any>((resolve, reject)=>{
  
      this.firestore.doc('player/'+this.playerid).update({ "four.health": newHealth})
    })
  }

  updateFourAlive(){
    return new Promise<any>((resolve, reject)=>{
  
      this.firestore.doc('player/'+this.playerid).update({ "four.alive" : false})
    })
  }

  updateOneAlive(){
    return new Promise<any>((resolve, reject)=>{
  
      this.firestore.doc('player/'+this.playerid).update({ "one.alive" : false})
    })
  }

  updateTwoAlive(){
    return new Promise<any>((resolve, reject)=>{
  
      this.firestore.doc('player/'+this.playerid).update({ "two.alive" : false})
    })
  }

  updateThreeAlive(){
    return new Promise<any>((resolve, reject)=>{
  
      this.firestore.doc('player/'+this.playerid).update({ "three.alive" : false})
    })
  }

  updateStreetCred(newCred){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({ "one.streetCred" : newCred})
    })
  }

  updateBurritos(newB){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({ "supplies.burritos" : newB})
    })
  }

  updateSardines(newS){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({ "supplies.sardines" : newS})
    })
  }

  updateNachos(newN){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({ "supplies.nachos" : newN})
    })
  }

  deleteDoc(){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.collection("player").doc(this.playerid).delete();
    })
  }

  updateJerky(newJ){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({ "supplies.jerky" : newJ})
    })
  }

  updateShirt(newS){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({ "supplies.shirts" : newS})
    })
  }

  updateCurrent(com){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({"one.current" : com}); 
    })
  }
 
  deletePlayer(data){
  
    return new Promise<any>((resolve, reject)=>{
    this.firestore.doc('player/'+this.playerid).update({
      [data] : firebase.firestore.FieldValue.delete()
    })
    
    })
}

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
    {action: " took bathsalts", points: 50}, 
    {action: " got staph infection from a stick 'n poke", points: 20}, 
    {action: " got boot rot from not changing socks", points: 20}, 
    {action: " broke their leg trying to learn a pop shove it", points: 10}, 
    {action: " got tweaked and fought a cop", points: 50}, 
    {action: " was shanked by a homebum", points: 20}, 
    {action: " got Covid", points: 20}, 
    {action: " got bedbugs", points: 20}, 
    {action: " has gangrene on an infected cut", points: 50}, 
    {action: " gave everybody dysentery because they suck at washing their hands", points: 10}, 
    {action: " has pneumonia", points: 20}, 
    {action: " is a wussy", points: 20}, 
    {action: " fell asleep in an ant pile", points: 40}
  ]

    this.getPlay(this.playerid)
    let statement=""; 
    let name; 
    let player; 
    let playerHealth; 
    let totalHealth; 
    let outOfSupplies = false; 
    let alive = true; 
    
    const num3 = Math.floor(Math.random() * 15)
    const num2 = Math.floor(Math.random() * 2)
    
    if (this.player){
      let num = Math.floor(Math.random() * 4)
      let oneHealth = this.player.one.health; 
      let twoHealth = this.player.two.health; 
      let threeHealth = this.player.three.health; 
      let fourHealth = this.player.four.health; 
      let burritos = this.player.supplies.burritos; 
      let sardines = this.player.supplies.sardines; 
      let jerky = this.player.supplies.jerky;
      let nachos = this.player.supplies.nachos;


      const playerArr = [this.player.one, this.player.two, this.player.three, this.player.four]; 
      

      //remove supplies
      if (burritos > 0){
        burritos -= 1; 
        this.updateBurritos(burritos)
      }else if(sardines > 0){
        sardines -= 1; 
        this.updateSardines(sardines)
      }else if(jerky > 0){
        jerky -= 1; 
        this.updateJerky(jerky)
      }else if(nachos > 0){
        nachos -= 1; 
        this.updateNachos(nachos); 
      }else{
        outOfSupplies = true; 
      }
      
      if(num === 0){
        name = this.player.one.name; //gets name
        player = this.player.one //gets player object

        var minusHealthPoints = disasterDict[num3].points; //amount of damage from object
       

        if(outOfSupplies){  //checks supplies bool
          minusHealthPoints += 20; 
        }

      
          playerHealth = oneHealth - minusHealthPoints; 
          this.updateOneHealth(playerHealth); //sends updated health

          if(playerHealth < 0 && player.alive == true){
            this.updateOneHealth(0)
            alive = false; 
            console.log('one died')
            statement = name + " has died"
            
            this.updateOneAlive(); 
          }

          if(player.alive === false){
            alive = false; 
          }
        
        
      }else if(num === 1){
        


        name = this.player.two.two; 
        player = this.player.two

        var minusHealthPoints = disasterDict[num3].points; 
        console.log(minusHealthPoints)
        
        if(outOfSupplies){
          minusHealthPoints += 20; 
        }
        

          playerHealth = twoHealth - minusHealthPoints; 
          this.updateTwoHealth(playerHealth); 

          if(playerHealth < 0 && player.alive == true){
            this.updateTwoHealth(0)
            alive = false; 
            console.log('two died')
            statement = name + " has died"
            this.updateTwoAlive(); 
          }

          if(player.alive === false){
            alive = false; 
          }
        

      }else if(num === 2){


    
        name = this.player.three.three
        player = this.player.three

        var minusHealthPoints = disasterDict[num3].points; 
        console.log(minusHealthPoints)

        if(outOfSupplies){
          minusHealthPoints += 20; 
        }
      
          playerHealth = threeHealth - minusHealthPoints; 
          this.updateThreeHealth(playerHealth); 

          if(playerHealth < 0 && player.alive == true){
            console.log("three DIED")
            this.updateThreeHealth(0)
            alive = false; 

            statement = name + " has died"
            this.updateThreeAlive(); 
          }
        
          if(player.alive === false){
            alive = false; 
          }
        
      }else if (num === 3){



        name = this.player.four.four
        player = this.player.four

        var minusHealthPoints = disasterDict[num3].points; 
        console.log(minusHealthPoints)

        if(outOfSupplies){
          minusHealthPoints += 20; 
        }
     
          playerHealth = fourHealth - minusHealthPoints; 
          this.updateFourHealth(playerHealth);
      
          if(playerHealth < 0 && player.alive == true){
            console.log('four died')
            this.updateFourHealth(0)
            alive = false; 
            statement = name + " has died"
            this.updateFourAlive(); 
          }

          if(player.alive === false){
            alive = false; 
          }
      }

    totalHealth = oneHealth + twoHealth + threeHealth + fourHealth; 
   




    //calculates streetCred
   
      if(this.player.type.type === "gut"){
       this.streetCred = this.player.one.streetCred + 25; 
      }else if(this.player.type.type.type ==="ska"){
        this.streetCred = this.player.one.streetCred +15; 
      }else{
        this.streetCred = this.player.one.streetCred + 10; 
      }
      
      this.updateStreetCred(this.streetCred);
    
      if (player.alive == true && playerHealth > 0){
        statement = name; 

        statement += disasterDict[num3].action; //returns the whole statment which is printed to the screen; 
      }


          //calculates total health status
    if(totalHealth >= 250){
      this.health = "Good"; 
    }else if(totalHealth > 150 && totalHealth < 250){
      this.health = "Fair"
    }else if (totalHealth > 0 && totalHealth < 150){
      this.health = "Poor"
    }else if(totalHealth < 1){
      if(num2 === 0){//audio for game over
        this.wha.play()
      }else{
        this.nodice.play()
      }
      this.gameOver = true; 
      this.firestore.collection("player").doc(this.playerid).delete(); 
    }

    
    }
    return statement; 




  }//end of play function
    



  //The majority of the game logic is here
  playShow(){

    this.getPlay(this.playerid)
    let statement=""; 
    
    
    const num1 = Math.floor(Math.random() * 2)
    const num2 = Math.floor(Math.random() * 20); 
    const num3 = Math.floor(Math.random() * 50); 
    const num4 = Math.floor(Math.random() * 2); 
    
    if (this.player){

      let player = this.player
      let shirt = this.player.supplies.shirts; 
      let cash = this.player.type.cash; 
  

      if (num1 === 1){
        if (shirt > 0){
          shirt -= 1;
          this.updateShirt(shirt);
          cash += num2;  
          this.updateCurrent(cash); 

          if(num4 ===0){ //audio for good stuff
            this.noway.play()
          }else{
            this.excel.play()
          }
          statement = "You sold one of your shirts for $" + num2; 
        }
      }else if(num1 === 0){
        if (cash > 0){
          statement = "While you were playing the show, somebody robbed your van for $" + num3; 
          cash -= num3; 
          this.updateCash(cash); 
          if (cash < 0){
            cash = 0; 
            this.updateCash(cash); 
          }else{
            statement + "You played and show and 2 people showed up. One said you sucked and left early"
          }
          
        }
      }else{
        statement + "You played and show and 2 people showed up. One said you sucked and left early"
      }
      
    
    }
    return statement; 

  }//end of playShow function


  sound = new Howl({
    src: ["../../assets/audio/bensound-jazzyfrenchy.mp3"], html5: true, loop: true
  })

  playMusic(){
    this.sound.play()
  }

  stopMusic(){
    this.sound.stop()
  }
  

}