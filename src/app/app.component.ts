import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  a;
  b;
  c;
  next(){
	  this.a = false;
	  this.b= false;
	  this.c=true;
	  
  }
  next1(){
	  alert("next1");
	  this.a = true;
	  this.b = false;
	  this.c=false;
  }
  next2(){
	  alert("next3");
	  this.a = false;
	  this.b = true;
	  this.c=false;
  }
  
}
