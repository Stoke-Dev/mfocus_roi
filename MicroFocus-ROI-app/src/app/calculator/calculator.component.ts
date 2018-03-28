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
      description: "The breadth of our access management solution enables our customers to offer simpler, more complete secure access to business data and systems. Our delivery model works regardless of where information is hosted (in the Cloud, on a mainframe, in the data center), where it is accessed from (mobile, desktop, devices), and who is accessing it (user, device, or thing)."
    },
    {
      id: 'id_gov',
      name: "Identity Management",
      savings: {},
      description: "Our Identity Management platform reduces risk and improves compliance by providing business users, IT and compliance teams with the ability to seamlessly collaborate in the process of governing user access and proving the organization is in control of the digital environment.<br><a href='#'>Pricing Guide</a>"
    },
    {
      id: 'prv_mgmt',
      name: "Privilege Management",
      savings: {},
      description: "Our Privilege management capabilities provide the ability to monitor, track and report changes to systems and data and control and monitor privileged users, who can inflict enormous damage with their access to critical information."
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

