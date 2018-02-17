import { Component, OnInit } from '@angular/core';
import { MfClientDataService } from '../mf-client-data.service';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  get mfNumStaff():number {return this._data.numStaff;}
  get mfAnTurnover():number {return this._data.anTurnover;}
  get mfAvgWage():number {return this._data.avgWage;}
  get mfAvgItWage():number {return this._data.avgItWage;}
  get mfNumApps():number {return this._data.numApps;}

  set mfNumStaff(value: number) {this._data.numStaff = value;}
  set mfAnTurnover(value: number){this._data.anTurnover = value;}
  set mfAvgWage(value: number) {this._data.avgWage = value;}
  set mfAvgItWage(value: number) {this._data.avgItWage = value;}
  set mfNumApps(value: number) {this._data.numApps = value;}


  constructor(private _data: MfClientDataService) { }

  ngOnInit() {
  }

}
