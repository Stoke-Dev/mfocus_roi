import { Component, OnInit } from '@angular/core';
import { MfClientDataService } from '../mf-client-data.service';
import { TooltipDataService } from '../tooltip-data.service';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

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


  constructor(private _data: MfClientDataService, private _toolTip: TooltipDataService, private router: Router, private location: Location) { }

  ngOnInit() {
    this._toolTip.title = "The Micro Focus Advantage";
    this._toolTip.description = "It has been widely documented by analysts and industry pundits alike that any additional spending on IT infrastructures will need to show business value. A quick way to illustrate value is through ROI.  Answer a few simple questions to learn how our identity and access management platform will drive true business value and provide a significant return on your investment.";
    this._toolTip.showCaret = false;
    this._toolTip.caretOffset = 96;
    this._toolTip.learnMoreUrl = new URL("https://www.netiq.com/solutions/identity-access-management/identity-powered-security.html");
    this._toolTip.imageUrl = this.location.prepareExternalUrl("assets/helper-box-images/image1.jpg");
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

  

  tooltipData = {
    'num_staff': {
      "title": "Number of Full-time Employees (FTEs)",
      "description": "Many benefits are realized on a per-employee basis, so the number of full-time employees is used to calculate the total value that can be realized. Casual staff — particularly in the health and retail industries — have a very different benefits profile and are calculated separately.",
      "learnmore": null,
      "image": this.location.prepareExternalUrl("assets/helper-box-images/image4.jpg")
    },
    'annual_turnover': {
      "title": "Average Annual Employee Turnover",
      "description": "Many benefits accrue from staff onboarding or offboarding. To determine their effects, the number of staff that join and leave an organization is required.",
      "learnmore": null,
      "image": this.location.prepareExternalUrl("assets/helper-box-images/image3.jpg")
    },
    'avg_wage': {
      "title": "Average Hourly Wage of Full-time Employees (FTEs)",
      "description": "The benefits are based on time savings. To calculate, we need to know the average hourly wage.",
      "learnmore": null,
      "image": this.location.prepareExternalUrl("assets/helper-box-images/image2.jpg")
    },
    'avg_it': {
      "title": "IT Staff Average Hourly Wage",
      "description": "In addition to providing benefits to end users (lost time, etc.) identity-powered security can not only reduce the effort to deliver access, but also reduce the time IT staff need to deliver these outcomes. Used to calculate benefits from the more efficient use of IT staff. Some redundant IT functions that may be eliminated with identity-powered automation.",
      "learnmore": null,
      "image": this.location.prepareExternalUrl("assets/helper-box-images/image1.jpg")
    },
    'num_app': {
      "title": "Number of Apps and Systems",
      "description": "Identity and access management reduces the complexity of an IT landscape by providing a logical bus architecture. The benefit from reduced complexity is calculated based on the number of applications you use. This number is also used to calculate the effort required to convert to this bus architecture.",
      "learnmore": null,
      "image": this.location.prepareExternalUrl("assets/helper-box-images/image5.jpg")
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
