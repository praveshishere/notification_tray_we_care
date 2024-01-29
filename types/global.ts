export interface Notification {
  subject: string;
  message: string;
  type: string;
  time: number;
  id: string;
  claimNumber?: string;
}
