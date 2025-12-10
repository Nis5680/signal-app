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
  

  updatevalue(variant:string){
    if(variant === 'inc'){
      this.count.set(this.count()+1);
    } else if(variant === 'dec'){
      this.count.set(this.count()-1);
    }
  }
}
