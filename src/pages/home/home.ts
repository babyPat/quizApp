import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timerVar;
  timerVal;


  summary:boolean;
  yes;
  no;

  summary1:boolean;
  yes1;
  no1;

  summary2:boolean;
  yes2;
  no2;

  
  summary3:boolean;
  yes3;
  no3;

  summary4:boolean;
  yes4;
  no4;

  scoreA = 0;



  question;
  ans;
  ans1;
  ans2;

  question1;
  answer;
  answer1;
  answer2;

  question2;
  lev;
  lev1;
  lev2;


  question3;
  level;
  level1;
  level2;

  question4;
  level4;
 level5;
 level6;

 scoreC = 0;

page0 =true;
 page1 = false;
 page2 = false;
 page3 =false;
 page4 = false;
 



 themb;
 th;
 th1;
 th2;


 patri;
 pd;
 pd1;
 pd2;


 rato;
 ra;
 ra1;
 ra2;

  
cand;
ca;
ca1;
ca2;


gugu;
gu;
gu1;
gu2;

scoreB =0;

Overal = 0;

message;
Passed;
Fail;
  

  

 

  constructor(public navCtrl: NavController) {

   



    this.summary=false;
    this.summary1=false;
    this.summary2=false;
    this.summary3=false;
    this.summary4=false;



    
    this.question=false;
    this.question1=false;
    this.question2=false;
    this.question3=false;
    this.question4=false;


    this.themb=false;
    this.patri=false;
    this.rato=false;
    this.cand=false;
    this.gugu=false;

    this.message = false;

    
  
  }


  submit(){
  this.summary=true;

   if(this.yes ==true){
     this.yes = "correct";
     this.scoreA +=1;
   }

   if(this.no == true){
     this.no = "incorrect"
   
   }


   this.summary1=true;
  
     if(this.yes1 ==true){
       this.yes1 ="incorrect it was Vitoria Pozzo ";
     }
  
     if(this.no1 == true){
       this.no1= "correct"
       this.scoreA +=1;
     
     }


    
     this.summary2=true;
  
     if(this.yes2 ==true){
       this.yes2 ="incorrect Ronaldo scored the highest number of goals";
     }
  
     if(this.no2 == true){
       this.no2= "correct"
       this.scoreA +=1;
     
     }


     this.summary3=true;
    
     if(this.yes3 ==true){
       this.yes3 = "correct";
       this.scoreA +=1;
     }
  
     if(this.no3 == true){
       this.no3 = "incorrect";
     
     }

     this.summary4=true;
      
     if(this.yes4 ==true){
       this.yes4 = "correct";
       this.scoreA +=1;
     }
  
     if(this.no4== true){
       this.no4 = "incorrect";
     
     }

      
  }

  submit2(){
      this.question =true;

      if(this.ans ==true){
        this.ans ="incorrect";
      }
      if(this.ans1 ==true){
        this.ans1 ="correct";
        this.scoreC +=1;
      }

      if(this.ans2 ==true){

        this.ans2 ="incorrect";
      }

    

      this.question1 =true;

      if(this.answer ==true){
        this.answer ="incorrect";

      }

      if(this.answer1 ==true){
        this.answer1 ="incorrect";
      }

      if(this.answer2 ==true){
        this.answer2 ="correct";
        this.scoreC +=1;
      }



      this.question2 = true;

      if(this.lev ==true){
        this.lev ="incorrect";
      }

      if(this.lev1 ==true){
        this.lev1 ="correct";
        this.scoreC +=1;
      }

      if(this.lev2 ==true){
        this.lev2 ="incorrect";
      }


      this.question3 = true;
      
      if(this.level ==true){
        this.level ="incorrect";
      }

      if(this.level1 ==true){
        this.level1 ="correct";
        this.scoreC +=1;
      }

      if(this.level2 ==true){
        this.level2 ="incorrect"
      }


      this.question4 = true;

       
      if(this.level4 ==true){
        this.level4 ="incorrect";
      }

      if(this.level5 ==true){
        this.level5 ="correct";
        this.scoreC +=1;
      }

      if(this.level6 ==true){
        this.level6="incorrect"
      }



  }


  submit1(){
   this.themb =true;

   if(this.th ==true){
     this.th="incorrect";
   }
  
   if(this.th1 ==true){
     this.th1 ="correct";
     this.scoreB +=1;
   }

   if(this.th2 ==true){
     this.th2 = "incorect"
   }


   this.patri = true;

   if(this.pd ==true){
     this.pd ="correct";
     this.scoreB +=1;
   }

   if(this.pd1 ==true){
     this.pd1 = "incorect";
   }

   if(this.pd2 ==true){
     this.pd2 ="incorect";
   }

   this.rato = true;

   if(this.ra == true){
     this.ra ="incorect";
   }

   if(this.ra1 == true){
     this.ra1 ="correct";
     this.scoreB +=1;
   }

   if(this.ra2 ==true){
     this.ra2 ="incorect";
   }

   this.cand = true;

   if(this.ca ==true){
     this.ca ="correct";
     this.scoreB +=1;
   }

   if(this.ca1 ==true){
     this.ca1 ="incorect";
   }

   if(this.ca2 ==true){
     this.ca2 ="incorect";
   }

   this.gugu = true;

   if(this.gu ==true){
     this.gu ="incorect";
   }

   if(this.gu1 ==true){
     this.gu1 ="correct";
     this.scoreB +=1;
   }

   if(this.gu2 == true){
     this.gu2 ="incorect";
   }
  }




  


  Next0(){

    
    this.page0 = false;
     this.page1 = true;
    this.page2 = false;
    this.page3 = false;
    this.page4 = false;
    this.startTime();
  }

  

  Next(){
  
    this.page0 = false;
    this.page1 = false;
    this.page2 = true;
    this.page3 = false;
    this.page4 = false;
   

    

  }

  Next1(){
    this.page0 = false;
    this.page1 =false;
    this.page2 =false;
    this.page3 = true;
    this.page4 = false;
  }

  Next2(){

    this.page0 = false;
    this.page1 =false;
    this.page2 =false;
    this.page3 = false;
    this.page4 = true;

    this.Overal =this.scoreA + this.scoreB +this.scoreC;
   
    this.message = true;
    
  if(this.Overal >=8){
    this.Passed ="Congradulation you have passed your test";
  }

  else if(this.Overal <=8){
    this.Fail ="Ops!! You have Failed your test";
  }
   
  
  
  

    
  }
  

  startTime(){
    

    

    this.timerVar = Observable.interval(1000).subscribe(x =>{

    console.log(x);
    this.timerVal = x;


    if(x == 60){

      this.timerVar.unsubscribe();
    }

    if(this.message == true){
      this.timerVar.unsubscribe();
    }
    })
  }

  submit4(){

    
    this.page0 = true;
    this.page1 = false;
    this.page2 = false;
    this.page3 = false;
    this.page4 = false;

    
    
  }


  
}