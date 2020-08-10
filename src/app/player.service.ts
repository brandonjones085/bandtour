import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; 
import { Player } from 'src/app/player.model'; 
import { FormControl, FormGroup } from '@angular/forms'; 
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators'
import * as firebase from 'firebase'; 

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
  health: string; 
  streetCred: number; 
  totalHealth: number
  gameOver= false; 





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

  updateJerky(newJ){
    return new Promise<any>((resolve, reject)=>{
      this.firestore.doc('player/'+this.playerid).update({ "supplies.jerky" : newJ})
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
    {action: " took bathsalts and was left behind", points: 50}, 
    {action: " got staph infection from a stick 'n poke", points: 20}, 
    {action: " got boot rot from not changing socks", points: 20}
  ]

    this.getPlay(this.playerid)
    let statement=""; 
    let name; 
    let player; 
    let playerHealth; 
    let totalHealth; 
    let outOfSupplies = false; 
    let alive = true; 
    
    const num1 = Math.floor(Math.random() * 4)
    
    if (this.player){
      const num = Math.floor(Math.random() * 4)
      let oneHealth = this.player.one.health; 
      let twoHealth = this.player.two.health; 
      let threeHealth = this.player.three.health; 
      let fourHealth = this.player.four.health; 
      let burritos = this.player.supplies.burritos; 
      let sardines = this.player.supplies.sardines; 
      let jerky = this.player.supplies.jerky;
      let nachos = this.player.supplies.nachos;
      

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

        var minusHealthPoints = disasterDict[num1].points; //amount of damage from object
        console.log(minusHealthPoints) //for logging

        if(outOfSupplies){  //checks supplies bool
          minusHealthPoints += 20; 
        }

        if (oneHealth > 0){ //is player alive?
          playerHealth = oneHealth - minusHealthPoints; 
          this.updateOneHealth(playerHealth); //sends updated health

          if(playerHealth <= 0){ //
            this.updateOneHealth(0)
            console.log("Player died")
            statement = name + " has died"
            alive = false; 
        }
          
        }
        

      }else if(num === 1){
        name = this.player.two.two; 
        player = this.player.two

        var minusHealthPoints = disasterDict[num1].points; 
        console.log(minusHealthPoints)
        
        if(outOfSupplies){
          minusHealthPoints += 20; 
        }
        
        if (twoHealth > 0){
          playerHealth = twoHealth - minusHealthPoints; 
          this.updateTwoHealth(playerHealth); 

          if(playerHealth <= 0){
            this.updateTwoHealth(0)
            statement = name + " has died"
            alive = false; 
          }
         
        }
        

      }else if(num === 2){
        name = this.player.three.three
        player = this.player.three

        var minusHealthPoints = disasterDict[num1].points; 
        console.log(minusHealthPoints)

        if(outOfSupplies){
          minusHealthPoints += 20; 
        }
        if(threeHealth > 0){
          playerHealth = threeHealth - minusHealthPoints; 
          this.updateThreeHealth(playerHealth); 

          if(playerHealth <= 0){
            this.updateThreeHealth(0)
            statement = name + " has died"
            alive = false; 
          }
       

        }
        
      }else if (num === 3){
        name = this.player.four.four
        player = this.player.four

        var minusHealthPoints = disasterDict[num1].points; 
        console.log(minusHealthPoints)

        if(outOfSupplies){
          minusHealthPoints += 20; 
        }
        if(fourHealth > 0){
          playerHealth = fourHealth - minusHealthPoints; 
          this.updateFourHealth(playerHealth);

          if(playerHealth <= 0){
            this.updateFourHealth(0)
            statement = name + " has died"
            alive = false; 
          }
       
        }
        
      }

    totalHealth = oneHealth + twoHealth + threeHealth + fourHealth; 
   


    //calculates total health status
    if(totalHealth >= 250){
      this.health = "Good"; 
    }else if(totalHealth > 150 && totalHealth < 250){
      this.health = "Fair"
    }else if (totalHealth > 0 && totalHealth < 150){
      this.health = "Poor"
    }else if(totalHealth < 1){
      this.gameOver = true; 
    }


  
    
    //calculates streetCred
   
      if(this.player.type.type === "gut"){
       this.streetCred = this.player.one.streetCred + 25; 
      }else if(this.player.type.type.type ==="ska"){
        this.streetCred = this.player.one.streetCred +15; 
      }else{
        this.streetCred = this.player.one.streetCred + 10; 
      }
      
      this.updateStreetCred(this.streetCred);
    
      if (alive === true){
        statement = name; 

        statement += disasterDict[num1].action; //returns the whole statment which is printed to the screen; 
      }
    
    }
    return statement; 
  }//end of play function
    


  

}
