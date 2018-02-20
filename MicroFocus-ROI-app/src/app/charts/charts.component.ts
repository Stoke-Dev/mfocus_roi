import { Component, OnInit } from '@angular/core';
import { MfClientDataService } from '../mf-client-data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

/* The graph is responive, and will automatically set the limits of the X and Y axis. All you have to do it add data */

    // lineChart
  public lineChartData:Array<any> = [
    {data: [0, 30000], label: 'With Micro Focus'}, /* Additional data can be added, separated by commas. If you do add data, you HAVE to also add to the lineChartsLabels array */
    {data: [0, 20000], label: 'Without Micro Focus'},
  ];
  public lineChartLabels: Array<any> = ['Year 1', 'Year 5'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  
  public chartHovered(e: any): void {
    console.log(e);
  }
}