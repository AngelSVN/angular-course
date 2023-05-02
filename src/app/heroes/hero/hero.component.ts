import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 25;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  public getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(newName:string = 'Spiderman'):void{
    this.name=newName;
  }

  public changeAge(newAge:number = 22):void{
    this.age=newAge;
  }

  public resetForm():void{
    this.age = 25;
    this.name = 'ironman';
  }
}
