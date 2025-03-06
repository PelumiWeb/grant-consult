
export type SignupData = {
  usertype?: string;
  fullName: string;
  phoneNumber?: string;
  email: string;
  country?: string;
  role?: string
  expertise?: string;
  password: string;
  confirmPassword?: string;
  sector?: string;
  yearOfExperience?: 0;
  organizationGroup?: string;
  organizationName?: string;
  organizationType?: string;
  passwordConfirm?: string; 

};

export type LoginData = {
  email: string;
  password: string;
  role?: string;
};

export type ResendVerification = {
  email: string;
};

export type createNewPasswordData = {
  email?: string;
  password: string;
  passwordConfirm: string;
  otp: string;
};

export type forgotPassword = {
  email: string;
};



export type User = any
