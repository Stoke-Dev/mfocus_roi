import { Component, OnInit } from '@angular/core';
import { TooltipDataService } from '../tooltip-data.service';

@Component({
  selector: 'app-helper-box',
  templateUrl: './helper-box.component.html',
  styleUrls: ['./helper-box.component.css']
})
export class HelperBoxComponent implements OnInit {

  constructor(private _data: TooltipDataService) { }

  ngOnInit() {

  }

}

