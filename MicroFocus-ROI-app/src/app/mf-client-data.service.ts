import { Injectable } from '@angular/core';

@Injectable()
export class MfClientDataService {
  public numStaff: number;
  public anTurnover: number;
  public avgWage: number;
  public avgItWage: number;
  public numApps: number;

  constructor() {}

  computeSavings(): object[] {
    //OUTPUT VARIABLES
    let idenGov = {
      "savings": 0,
      "yearRoi": [0,0,0,0,0]
    };
    let accMgmt = {
      "savings": 0,
      "roiY1": 0,
      "yearRoi": [0,0,0,0,0]
    };
    let privMgmt = {
      "savings": 0,
      "yearRoi": [0,0,0,0,0]
    };
  
    //Remap form input variables
    let SFT_Count = this.numStaff;
    let SFT_Wage = this.avgWage;
    let SFT_AM_apps = this.numApps;
    let LCL_ITOps_wage = this.avgItWage;
    let STF_Churn = this.anTurnover;
    let SFT_IDM_apps = this.numApps;

    /* Static Constants */
    let SFT_AM_apps_used = 8;
    let LCL_SSO_avoidance_time = 10;
    let LCL_working_days = 220;
    let LCL_AB_app_cust_time = 115;
    let LCL_AB_savings_rate = .5;
    let LCL_IB_maintenance_rate = .2;
    let LCL_helpdesk_PR_cost = 25;
    let SFT_Entitlement_count = 15;
    let INF_Fulfilment_average_saving = 42;
    let SFT_password_forgets = 5;
    let SFT_SSPR_Rate = .5;
    let SFT_Projects_proportion = .2;
    let SFT_Projects_entitlements = 8;
    let SFT_workflows = 2;
    let INF_WF_average_saving = 57.50;
    let SFT_entitlement_approval_rate = .3;
    let LCL_approver_time = 10;
    let LCL_approver_reduction_rate = .5;
    let LCL_approver_wage = 70;
    let LCL_IB_connections_avg = 2;
    let LCL_IB_app_cust_time = 115;
    let LCL_IB_savings_rate = .5;
    let LFR_IDM_base = 1140;
    let MFR_rate = .25;
    let LFR_IDM_user = 46;
    let LCL_CR_rate = 2000;
    let LCL_CR_IDM_setup = 8;
    let LCL_CR_IDM_Conn_simple = 5;
    let INF_idm_connectors_simple = 4;
    let LCL_CR_IDM_Conn_medium = 10;
    let INF_idm_connectors_medium = 6;
    let LCL_CR_IDM_Conn_complex = 20;
    let INF_idm_connectors_complex = 10;
    let LCL_CR_IDM_WF_simple = 5;
    let INF_WF_simple = 3;
    let LCL_CR_IDM_WF_medium = 10;
    let INF_WF_medium = 4;
    let LCL_CR_IDM_WF_complex = 20;
    let INF_WF_complex = 3;
    let LCL_CR_requirements_OH = .3;
    let LCL_CR_post_OH = .25;
    let LFR_AM_user = 18;
    let LCL_CR_AM_setup = 1;
    let LCL_CR_AM_integration = 1;


    //Savings Computations
    let S_SSO = (SFT_AM_apps_used-1)*(LCL_SSO_avoidance_time/3600*SFT_Wage*LCL_working_days)*SFT_Count;
    let ACCESS_BUS_DEVTEST = (SFT_AM_apps*LCL_AB_app_cust_time*LCL_ITOps_wage)*LCL_AB_savings_rate;
    let ACCESS_BUS_MAINTSAV = ACCESS_BUS_DEVTEST*LCL_IB_maintenance_rate;

    let ID_REGIST = SFT_Count*STF_Churn*(LCL_helpdesk_PR_cost);
    let BIRTHRIGHT_ENT = SFT_Count*STF_Churn*(SFT_Entitlement_count*INF_Fulfilment_average_saving);
    let PASS_RESET = SFT_Count*LCL_helpdesk_PR_cost*SFT_password_forgets*SFT_SSPR_Rate;
    let ENT_CHANGES = SFT_Count*SFT_Projects_proportion*SFT_Projects_entitlements*INF_Fulfilment_average_saving;
    let WORKFLOWS = SFT_Count*SFT_workflows*INF_WF_average_saving;
    let DECISION_SPT = SFT_Count*(STF_Churn*SFT_Entitlement_count+SFT_Projects_proportion*SFT_Projects_entitlements)*SFT_entitlement_approval_rate*(LCL_approver_time/60)*LCL_approver_reduction_rate*LCL_approver_wage;
    let ID_SEP = ID_REGIST + BIRTHRIGHT_ENT;
    let ID_BUS_DEVTEST = ((SFT_IDM_apps*LCL_IB_app_cust_time*LCL_ITOps_wage)+((SFT_IDM_apps-1)*(LCL_IB_connections_avg*LCL_IB_app_cust_time*LCL_ITOps_wage*0.5)))*LCL_IB_savings_rate;
    let ID_BUS_MAINTSAV = ID_BUS_DEVTEST*LCL_IB_maintenance_rate;

    //Year ROI Computations
    let ID_MGMT_COST_LFR = LFR_IDM_base+SFT_Count*LFR_IDM_user;
    let ID_MGMT_COST_MFR = ID_MGMT_COST_LFR*MFR_rate;
    let ID_MGMT_COST_CFR = LCL_CR_rate*(LCL_CR_IDM_setup+LCL_CR_IDM_Conn_simple*INF_idm_connectors_simple+LCL_CR_IDM_Conn_medium*INF_idm_connectors_medium+LCL_CR_IDM_Conn_complex*INF_idm_connectors_complex+LCL_CR_IDM_WF_simple*INF_WF_simple+LCL_CR_IDM_WF_medium*INF_WF_medium+LCL_CR_IDM_WF_complex*INF_WF_complex)*(1+LCL_CR_requirements_OH+LCL_CR_post_OH);

    let ACC_MGMT_COST_LFR = LFR_AM_user*SFT_Count;
    let ACC_MGMT_COST_MFR = ACC_MGMT_COST_LFR*MFR_rate;
    let ACC_MGMT_COST_CFR = LCL_CR_rate*(LCL_CR_AM_setup+LCL_CR_AM_integration*SFT_AM_apps)*(1+LCL_CR_requirements_OH+LCL_CR_post_OH);

    console.log("S_SSO-" +S_SSO )
    console.log("ACCESS_BUS_DEVTEST-" +ACCESS_BUS_DEVTEST )
    console.log("ACCESS_BUS_MAINTSAV-" +ACCESS_BUS_MAINTSAV )

    console.log("ID_REGIST-" +ID_REGIST )
    console.log("BIRTHRIGHT_ENT-" +BIRTHRIGHT_ENT )
    console.log("PASS_RESET-" +PASS_RESET )
    console.log("ENT_CHANGES-" +ENT_CHANGES )
    console.log("WORKFLOWS-" +WORKFLOWS )
    console.log("DECISION_SPT-" +DECISION_SPT )
    console.log("ID_SEP-" +ID_SEP )
    console.log("ID_BUS_DEVTEST-" +ID_BUS_DEVTEST )
    console.log("ID_BUS_MAINTSAV-" +ID_BUS_MAINTSAV )
    
    //Savings
    idenGov.savings = ID_REGIST + BIRTHRIGHT_ENT + PASS_RESET + ENT_CHANGES + WORKFLOWS + DECISION_SPT + ID_SEP + ID_BUS_DEVTEST + ID_BUS_MAINTSAV;
    accMgmt.savings = S_SSO + ACCESS_BUS_DEVTEST + ACCESS_BUS_MAINTSAV;
    privMgmt.savings = 0; //FINISH ME
    
    //IDMGMT ROI
    let year1 = idenGov.savings - (ID_MGMT_COST_LFR + ID_MGMT_COST_MFR + ID_MGMT_COST_CFR);
    let year2 = year1 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
    let year3 = year2 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
    let year4 = year3 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
    let year5 = year4 + idenGov.savings - (0 + ID_MGMT_COST_MFR + 0);
    idenGov.yearRoi = [year1, year2, year3, year4, year5];

    //IDMGMT ROI
    year1 = accMgmt.savings - (ACC_MGMT_COST_LFR + ACC_MGMT_COST_MFR + ACC_MGMT_COST_CFR);
    year2 = year1 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
    year3 = year2 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
    year4 = year3 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
    year5 = year4 + accMgmt.savings - (0 + ACC_MGMT_COST_MFR + 0);
    accMgmt.yearRoi = [year1, year2, year3, year4, year5];

    return [idenGov, accMgmt, privMgmt];
  }

}

