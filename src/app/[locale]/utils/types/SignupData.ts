
export type SignupData = {
  usertype?: string;
  fullName: string;
  phoneNumber?: string;
  email: string;
  country?: string;
  expertise?: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = {

  email: string;
  password: string;
};



export type User = any

// export const tabsName:tabsTypes = {
// profile: "Profile",
// assignedGrants: "assigned grants",
// consultation: "consultation",
// message: "message",
// wallet: "wallet",
// settings: "settings",
// helpSupport: "help & support",
// logout: "logout",
//   generalDashboard: "Dashboard",

//   grant: "grant",
//   manageSubscription: "manageSubscription",
//   grantConsulatation: "grantConsulatation",
//   generalConsultationDetails: "generalConsultationDetails",
// myGrants: "my Grants",
//   allGrants: "allGrants",
//   grantPerformanceMetric: "grantPerformanceMetric"



// }
