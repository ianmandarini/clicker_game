import { Injectable } from '@angular/core';
import { EnUs } from 'app/language/en-us';
import { LanguageTemplate } from 'app/language/language-template';

@Injectable()
export class LanguageService {

  private languages: { [id: string] : LanguageTemplate; } = { "en-us" : EnUs };
  private current_language_string = "en-us";
  private current_language: LanguageTemplate = this.languages["en-us"];

  constructor()
  { 

  }

  public txt(text: string): string
  {
    if( text in this.current_language )
    {
      return this.current_language[text];
    }
    else
    {
      console.error(`Language Error: ${text} has not been translated to ${this.current_language_string}`);
      return "LANGUAGE ERROR"
    }
  }

  public Txt(text: string): string
  {
    let display_string = this.txt(text);
    display_string = display_string.slice(0,1).toUpperCase() + display_string.slice(1);
    return display_string;
  }

}
