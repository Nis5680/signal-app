import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count= signal(5);
  x=20;

  constructor() {
    effect(()=>{
      console.log(this.count());
    });
  }
  

  updatevalue(){
    this.count.set(30);
  }
}
