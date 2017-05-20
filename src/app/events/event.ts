import { ProgressService } from 'app/progress/progress.service';
import { Trigger } from 'app/progress/trigger';

export class Event {

  private reveal_progress_tag: string;
  private done_progress_tag: string;
  private name_tag: string;
  private description_tag: string;

  constructor(  private progress: ProgressService,
                private condition_function: { (): boolean; },
                protected tag: string,
                private activation_function: { (): void; },
                private close_function: { (): void; })
  {
    this.reveal_progress_tag = tag + "_reveal";
    this.done_progress_tag = tag + "_done";
    this.name_tag = tag + "_name";
    this.description_tag = tag + "_description";

    this.progress.addTrigger(this.reveal_progress_tag, new Trigger() );
    this.progress.addCondition(this.reveal_progress_tag,condition_function);
    this.progress.addTrigger(this.done_progress_tag, new Trigger() );
  }
  
  tagR(): string
  {
    return this.reveal_progress_tag;
  }

  tagDone(): string
  {
    return this.done_progress_tag;
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
    this.progress.trigger(this.done_progress_tag);
  }
}

export class SingleButtonEvent extends Event {

  private button_tag: string;

  constructor(  progress: ProgressService,
                condition_function: { (): boolean; },
                tag: string,
                activation_function: { (): void; },
                close_function: { (): void; },
                private button_function: { (): void; }, ) 
  { 
    super(progress, condition_function, tag, activation_function, close_function);
    this.button_tag = this.tag + "_button"; 
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
