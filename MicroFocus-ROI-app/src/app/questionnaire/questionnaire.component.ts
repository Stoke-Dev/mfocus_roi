import { Component, OnInit } from '@angular/core';
import { MfClientDataService } from '../mf-client-data.service';
import { TooltipDataService } from '../tooltip-data.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  get mfNumStaff():number {return this._data.numStaff;}
  get mfAnTurnover():number {return (this._data.anTurnover)?this._data.anTurnover*100:null;}
  get mfAvgWage():number {return this._data.avgWage;}
  get mfAvgItWage():number {return this._data.avgItWage;}
  get mfNumApps():number {return this._data.numApps;}

  set mfNumStaff(value: number) {this._data.numStaff = value;}
  set mfAnTurnover(value: number){this._data.anTurnover = value/100;}
  set mfAvgWage(value: number) {this._data.avgWage = value;}
  set mfAvgItWage(value: number) {this._data.avgItWage = value;}
  set mfNumApps(value: number) {this._data.numApps = value;}


  constructor(private _data: MfClientDataService, private _toolTip: TooltipDataService) { }

  ngOnInit() {
    this._toolTip.title = "The Micro Focus Advantage";
    this._toolTip.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.";
    this._toolTip.showCaret = false;
    this._toolTip.caretOffset = 96;
    this._toolTip.learnMoreUrl = new URL(window.location.href);
    this._toolTip.imageUrl = new URL("http://via.placeholder.com/350x150");
  }

  tooltipData = {
    'num_staff': {
      "title": "Number of Full-time Employees (FTEs)",
      "description": "Consectetur adipiscing elit. Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
      "learnmore": new URL(window.location.href),
      "image": new URL("http://via.placeholder.com/350x151")
    },
    'annual_turnover': {
      "title": "Average Annual Employee Turnover",
      "description": "Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
      "learnmore": new URL(window.location.href),
      "image": new URL("http://via.placeholder.com/350x152")
    },
    'avg_wage': {
      "title": "Average Hourly Wage of Full-time Employees (FTEs)",
      "description": "Pellentesque malesuada eget neque quis vestibulum. Consectetur adipiscing elit. Nulla ut ultricies diam.  Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
      "learnmore": new URL(window.location.href),
      "image": new URL("http://via.placeholder.com/350x153")
    },
    'avg_it': {
      "title": "IT Staff Average Hourly Wage",
      "description": "Integer faucibus ipsum nibh pellentesque malesuada eget neque quis vestibulum. Pellentesque malesuada eget neque quis vestibulum. Consectetur adipiscing elit. Nulla ut ultricies diam.  Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. Maecenas eu sapien in erat dapibus semper sit amet vel risus.",
      "learnmore": new URL(window.location.href),
      "image": new URL("http://via.placeholder.com/350x154")
    },
    'num_app': {
      "title": "Number of Apps and Systems",
      "description": "Maecenas eu sapien in erat dapibus semper sit amet vel risus. Consectetur adipiscing elit. Nulla ut ultricies diam. Pellentesque malesuada eget neque quis vestibulum. Integer faucibus ipsum nibh, ut lobortis mauris sagittis a. ",
      "learnmore": new URL(window.location.href),
      "image": new URL("http://via.placeholder.com/350x155")
    }
  }

  focused(event) {
    let offset = event.target.offsetTop + event.target.offsetParent.offsetTop;

    let currentElementData = this.tooltipData[event.target.id];
    

    this._toolTip.caretOffset = offset;
    this._toolTip.showCaret = true;

    this._toolTip.title = currentElementData.title;
    this._toolTip.description = currentElementData.description;
    this._toolTip.learnMoreUrl = currentElementData.learnmore;
    this._toolTip.imageUrl = currentElementData.image;

  }

}
