export interface Alert {
  message: string;
  status: 'Ok' | 'Error' | 'Warn';
}