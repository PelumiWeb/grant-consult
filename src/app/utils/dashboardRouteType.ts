

export type DashboardRoute = {
  profile: string;
  assignedGrant: string;
  assignDetails: string; 
  consultation: string;
  consultationDetails: string;
  performanceMetrics: string;
  wallet: string;
  walletHistory: string;
  generalDashboard: string;
  manageSubscription: string;
  grantConsulatation: string;
  generalConsultationDetails: string;
  myGrants: string;

}

export const dashboardRouteName:DashboardRoute = {
  profile: "profile",
  generalDashboard: "Dashboard",

   assignedGrant: "assignedGrant",
  assignDetails: "assignDetails",
  consultation: "consultation",
  consultationDetails: "consultationDetails",
  performanceMetrics: "performanceMetrics",
  wallet: "wallet",
  walletHistory: "walletHistory",
  manageSubscription: "manageSubscription",
  grantConsulatation: "grantConsulatation",
  generalConsultationDetails: "generalConsultationDetails",
  myGrants: "myGrants"

}
