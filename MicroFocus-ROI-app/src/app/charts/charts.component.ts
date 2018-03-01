import { Component, OnInit, Input } from '@angular/core';
// import { MfClientDataService } from '../mf-client-data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  @Input() data: number[];

  ngOnInit() {
    this.lineChartData = [
      { data: this.data, label: 'ROI With Micro Focus' }, /* Additional data can be added, separated by commas. If you do add data, you HAVE to also add to the lineChartsLabels array */
      // {data: [0, 20000], label: 'Without Micro Focus'},
    ];
  }

  /* The graph is responive, and will automatically set the limits of the X and Y axis. All you have to do it add data */

  // lineChart
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any> = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
  public lineChartOptions: any = {
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
              return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                  return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
              });
          }
      }
  },

    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          autoSkip: true,
          beginAtZero: true,

                    // Return an empty string to draw the tick line but hide the tick label
          // Return `null` or `undefined` to hide the tick line entirely
          userCallback: function (value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(',');
            return '$' + value;
          }
        }
      }]
    }

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
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}