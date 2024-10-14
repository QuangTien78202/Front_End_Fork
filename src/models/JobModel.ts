export interface Job {
  JobId: number;
  UserId: number;
  Title: string;
  Description: string;
  Location: string;
  Salary: number;
  StartTime: Date;
  EndTime: Date;
  PostedBy: string;
  Status: boolean;
  ImageUrl: string;
  isHot: boolean;
}
