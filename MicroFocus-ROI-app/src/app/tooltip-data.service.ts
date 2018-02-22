import { Injectable } from '@angular/core';
import { Url } from 'url';

@Injectable()
export class TooltipDataService {

  public title: String;
  public description: String;

  public showCaret: boolean;
  public caretOffset: number;

  public learnMoreUrl: Url;
  public imageUrl: Url;


  constructor() { }

}
