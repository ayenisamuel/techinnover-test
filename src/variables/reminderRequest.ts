export class ReminderRequest {
  user: number;
  description: string;
  constructor(user: number, description: string) {
    this.user = user;
    this.description = description;
  }
}
