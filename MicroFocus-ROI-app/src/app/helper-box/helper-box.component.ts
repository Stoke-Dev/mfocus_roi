import { Component, OnInit } from '@angular/core';
import { TooltipDataService } from '../tooltip-data.service';

@Component({
  selector: 'app-helper-box',
  templateUrl: './helper-box.component.html',
  styleUrls: ['./helper-box.component.css']
})
export class HelperBoxComponent implements OnInit {

  get ttLearnMore():number {return this._data.learnMoreUrl;}
  get ttImgURL():number {return this._data.imageUrl;}
  get ttShowCaret():boolean {return this._data.showCaret;}
  get ttCaretOffset():number {return this._data.caretOffset;}
  get ttTitle():String {return this._data.title;}
  get ttDescription():String {return this._data.description;}


  constructor(private _data: TooltipDataService) { }

  ngOnInit() {

  }

}

