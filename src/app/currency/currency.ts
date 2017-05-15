export class Currency {
  private count: number;

  constructor(
    private tag_singular:string,
    private tag_plural:string)
  {
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

  public tagS()
  {
    return this.tag_singular;
  }

  public tagP()
  {
    return this.tag_plural;
  }

  public hasEnough(value: number): boolean
  {
    return this.count >= value;
  }
}
