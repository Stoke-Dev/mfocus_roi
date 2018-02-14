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
      description: "Lorem Ipsum description of item.",
      savings: 3500,
      checked: false
    },
    {
      id: "ac_mgmt",
      name: "Access Management",
      description: "Lorem Ipsum description of item.",
      savings: 3500,
      checked: false
    },
    {
      id: "prv_mgmt",
      name: "Privilege Management",
      description: "Lorem Ipsum description of item.",
      savings: 3500,
      checked: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

