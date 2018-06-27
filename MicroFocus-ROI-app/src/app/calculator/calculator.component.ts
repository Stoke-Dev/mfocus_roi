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
      id: 'ac_mgmt',
      name: "Access Management",
      savings: {},
      description: "The breadth of our access management solution enables our customers to offer employees simpler, yet much more more secure access to business data and systems. Our delivery model works regardless of where information is hosted (in the cloud, on a mainframe, or in the data center), where it is accessed (from desktop computers or mobile devices), and who is accessing it (a human user, a device, or a connected “thing”).",
      url: "https://www.netiq.com/solutions/identity-access-management/secure-access.html",
      hidden: false
    },
    {
      id: 'id_gov',
      name: "Identity Management",
      savings: {},
      description: "Our identity governance platform reduces risk and improves compliance by providing business users, IT departments, and compliance teams with the ability to seamlessly collaborate in providing user access, placing the organization firmly in control of the digital environment.",
      url: "https://www.netiq.com/solutions/identity-access-management/it-regulatory-compliance.html",
      hidden: false
    },
    {
      id: 'prv_mgmt',
      name: "Privilege Management",
      savings: {},
      description: "Our privilege management capabilities give you provide the ability to monitor the accounts that access your most vital information and record all of their actions. If any suspicious behavior occurs, your security team is notified immediately to stop a breach in its tracks.",
      url: "https://www.netiq.com/solutions/identity-access-management/monitor-privileged-users.html",
      hidden: true
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

