export class Event {
  constructor(  private reveal_progress_tag: string,
                private name_tag: string,
                private description_tag: string,
                private activation_function: { (): void; },
                private close_function: { (): void; })
  {

  }
  
  tagR(): string
  {
    return this.reveal_progress_tag;
  }

  tagN(): string
  {
    return this.name_tag;
  }

  tagD(): string
  {
    return this.description_tag;
  }

  activate(): void
  {
    this.activation_function();
  }

  close(): void
  {
    this.close_function();
  }
}

export class SingleButtonEvent extends Event {

  constructor(  reveal_progress_tag: string,
                name_tag: string,
                description_tag: string,
                activation_function: { (): void; },
                close_function: { (): void; },
                private button_tag: string,
                private button_function: { (): void; }, ) 
  { 
    super(reveal_progress_tag, name_tag, description_tag, activation_function, close_function); 
  }

  tagB(): string
  {
    return this.button_tag;
  }

  click() : void
  {
    this.button_function();
  }  
}
