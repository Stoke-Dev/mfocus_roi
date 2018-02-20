import { Injectable } from '@angular/core';

@Injectable()
export class TooltipDataService {

  public title: String;
  public description: String;

  public showCaret: boolean;
  public caretOffset: number;


  constructor() { }

}
