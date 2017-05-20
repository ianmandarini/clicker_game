import { Savable } from 'app/save/savable';

export class Currency implements Savable {
  private count: number;

  private tag_singular:string;
  private tag_plural:string;

  constructor(
    private id_tag: string)
  {
    this.tag_singular = id_tag + "_singular";
    this.tag_plural = id_tag + "_plural";
    this.count = 0;
  }

  public add(value: number): void
  {
    this.count += value;
  }

  public xcount(): number
  {
    return Math.floor(this.count);
  }

  public tag(): string
  {
    return this.id_tag;
  }

  public tagS(): string
  {
    return this.tag_singular;
  }

  public tagP(): string
  {
    return this.tag_plural;
  }

  public hasEnough(value: number): boolean
  {
    return this.count >= value;
  }

  public getState(): {[label: string]: any}
  {
    let state: {[label: string]: any} = {};
    state["count"] = this.count;
    return state; 
  }

  public setState(state : {[label: string]: any}): void
  {
    this.count = state["count"];
  }

  public clearState(): void
  {
    this.count = 0;
  }
}
