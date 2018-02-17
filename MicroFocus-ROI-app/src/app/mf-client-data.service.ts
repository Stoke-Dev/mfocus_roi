import { Injectable } from '@angular/core';

@Injectable()
export class MfClientDataService {
  public numStaff: number;
  public anTurnover: number;
  public avgWage: number;
  public avgItWage: number;
  public numApps: number;

  constructor() {}

  computeSavings(): number[] {
    //OUTPUT VARIABLES
    let idenGov;
    let accMgmt;
    let privMgmt;
  
    //Remap form input variables
    let FTES = this.numStaff;
    let Average_IT_staff_wage = this.avgItWage;
  

    /* Static Constants */
    let FTES_AM_inj = 6;
    let FTES_AM_fed = 3;
    let FTES_AM_avg_login_time = 10;
    let FTES_working_days = 220;
    let FTES_Wage = 1;
    let FTES_cust_AM_dev_hrs = 230;
    let FTES_AM_cust_apps_mtce = .30;
    let FTES_AB_apps_savings = .95;
    let FTES_AB_apps_mtce = .20;


    //Computations
    let SSO = (FTES_AM_inj+FTES_AM_fed-1)*FTES_AM_avg_login_time*FTES_working_days*FTES_Wage/3600*FTES;
    let ACCESS_BUS = (FTES_AM_inj+FTES_AM_fed)*FTES_cust_AM_dev_hrs*Average_IT_staff_wage*(FTES_AM_cust_apps_mtce-(1-FTES_AB_apps_savings)*FTES_AB_apps_mtce);
  
    idenGov = 0; //FINISH ME
    accMgmt = SSO + ACCESS_BUS;
    privMgmt = 0; //FINISH ME
  
    return [idenGov, accMgmt, privMgmt];
  }

}

