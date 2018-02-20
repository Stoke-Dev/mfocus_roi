import { Component, OnInit } from '@angular/core';
import { TooltipDataService } from '../tooltip-data.service';

@Component({
  selector: 'app-helper-box',
  templateUrl: './helper-box.component.html',
  styleUrls: ['./helper-box.component.css']
})
export class HelperBoxComponent implements OnInit {

  tooltipStyle = "margin-top:" + this._data.caretOffset + "px";

  constructor(private _data: TooltipDataService) { }

  ngOnInit() {

  }

}

