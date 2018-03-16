import { Component, OnInit } from '@angular/core';
import { MfClientDataService } from '../mf-client-data.service';
import { ChartsComponent } from '../charts/charts.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  categories = [
    {
      id: 'id_gov',
      name: "Identity Management",
      savings: {},
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci.<br><a href='#'>Pricing Guide</a>"
    },
    {
      id: 'ac_mgmt',
      name: "Access Management",
      savings: {},
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci."
    },
    {
      id: 'prv_mgmt',
      name: "Privilege Management",
      savings: {},
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci."
    }
  ];

  constructor(private _data: MfClientDataService, private router: Router) { }


  ngOnInit() {
    [this.categories[0].savings, this.categories[1].savings, this.categories[2].savings] = this._data.computeSavings();

    this.categories.sort(compareSavings);

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }

}

function compareSavings(a,b) {
  if (a.savings < b.savings)
    return 1;
  if (a.savings > b.savings)
    return -1;
  return 0;
}

