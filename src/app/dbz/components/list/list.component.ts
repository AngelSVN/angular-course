import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'})
export class ListComponent {
  @Output()
  public onDeleteChar : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList:Character[] =
  [

  ]
  public onDeleteCharacter(id?:string):void{
    if(!id) return ;
    console.log({id});
    this.onDeleteChar.emit(id);
  }
}
