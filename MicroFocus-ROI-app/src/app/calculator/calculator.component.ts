import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  categories = [
    {
      id: "id_gov",
      name: "Identity Governance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci.",
      savings: 3500,
      checked: false
    },
    {
      id: "ac_mgmt",
      name: "Access Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci.",
      savings: 3500,
      checked: false
    },
    {
      id: "prv_mgmt",
      name: "Privilege Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie libero elit, quis placerat erat vehicula sed. Sed vitae orci efficitur, dignissim diam sit amet, tempor velit. Nam imperdiet, turpis in dictum maximus, nisl diam dapibus nibh, sit amet lacinia eros ante ut orci.",
      savings: 35100,
      checked: false
    }
  ];

  constructor() { }

  ngOnInit() {
    this.categories.sort(compareSavings);
  }

}

function compareSavings(a,b) {
  if (a.savings < b.savings)
    return 1;
  if (a.savings > b.savings)
    return -1;
  return 0;
}