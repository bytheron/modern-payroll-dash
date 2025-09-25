export interface IUserProfile {
  name: string;
  employeeId: string;
  role: string;
  overview: IFinancialOverview;
}

export interface IFinancialOverview {
  currency: string;
  totalEarnings: number;
  totalRate: number;
  netTotal: number;
  deductions: {
    paye: number;
    uif: number;
    total: number;
  };
}

export interface ITask {
  id: string;
  name: string;
  description: string | null;
  type: string;
  quantity: number;
  rate: number | null;
}

export interface IViewData {
  userProfile: IUserProfile;
  tasks: ITask[];
}
