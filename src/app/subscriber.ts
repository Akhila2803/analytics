
export interface Subscriber {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    planType: string;
    location: string;
    plan: Plan;
    // Add other properties or relationships as needed
  }
  export interface Plan {
    id: string;
    name: string;
    dataLimit: string;
    totalData: string;
    voiceLimit: string;
    smsLimit: string;
    validity: string;
    price: number;
    planType: string; 
}
export interface CallHistory{
  name: String;
  phoneNumber: String;
  startTime: String;
  endTime: String;
  date : String;
  callDuration:String;
}
export interface Text{
  name:String;
  phoneNumber:String;
  time:String;
  date:String;
}
export interface Data{
  name:String;
  phoneNumber:String;
     date:String;
    dataPerDay:String;
   consumedData:String;
     leftData:String;
}

  

  