

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
  allGrants: string;
  grantPerformanceMetric: string;

}

export const dashboardRouteName:DashboardRoute = {
  profile: "Profile",
  generalDashboard: "dashboard",

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
  myGrants: "myGrants",
  allGrants: "allGrants",
  grantPerformanceMetric:"grantPerformanceMetric"


}
