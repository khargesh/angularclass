import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularClassCalC';
  action='op';
  result='';
  firstNumber='';
  secondNumber='';

  getResult(action){
    //alert('wer');
    debugger;
    this.action=action;
    this.result='';
    switch (action){
      case '+':
        this.result=String(parseFloat(this.firstNumber) + parseFloat(this.secondNumber)); 
        break;        
      case '-': 
      this.result= String(parseFloat(this.firstNumber) - parseFloat(this.secondNumber)); 
      break;
      case 'x': 
      this.result= String(parseFloat(this.firstNumber) * parseFloat(this.secondNumber)); 
      break;
      case 'clear':
        this.action='op';
        this.result='';
        this.firstNumber='';
        this.secondNumber='';
        break;
      
    }
  }

}


