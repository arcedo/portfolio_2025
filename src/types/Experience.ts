export interface Experience {
  company: string; // or grade name if it's a study
  title: string;
  description: Array<string>; // this way can be iterated to create a list
  linkPage: string;
  startMonth: string;
  startYear: number;
  endMonth?: string;
  endYear?: number;
}
