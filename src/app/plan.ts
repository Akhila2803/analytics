export interface Plan {
    id: string;
    name: string;
    dataLimit: String;
    totalData: String;
    voiceLimit: String;
    smsLimit: String;
    validity: String;
    price: number;
    planType: string; 
    
    // name:string;
    // price: string;
    // datatype:string;
    // details:string;
    
}
export enum PlanType {
    PREPAID = 'PREPAID',
    POSTPAID = 'POSTPAID',
  }
  
  
