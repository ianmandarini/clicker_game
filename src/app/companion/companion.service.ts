import { Injectable } from '@angular/core';
import { Savable } from 'app/save/savable';

@Injectable()
export class CompanionService implements Savable {

  constructor() { }

  public getCurrentDialogueLabel(): string
  {
    return "clicker_description";
  }

  public getPicture(): string
  {
    return "assets/companion.png";
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
  }

  public clearState(): void
  {
  }
}
