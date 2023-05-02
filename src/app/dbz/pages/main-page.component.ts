import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {
  public characters:Character[] = [
    {
      name:'Krillin',
      power: 500
    },
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];
  public onNewCharacter(character:Character):void{
+    this.characters.push(character);
  }
}
