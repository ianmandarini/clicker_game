import { Injectable } from '@angular/core';
import { EnUs } from 'app/language/en-us';
import { LanguageTemplate } from 'app/language/language-template';

@Injectable()
export class LanguageService {

  private languages: { [id: string] : LanguageTemplate; } = { "en-us" : EnUs };
  private current_language: LanguageTemplate = this.languages["en-us"];

  constructor()
  { 

  }

  txt(text: string): string
  {
    return this.current_language[text];
  }

}
