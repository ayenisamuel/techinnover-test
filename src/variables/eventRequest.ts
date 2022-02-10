export class EventRequest {
  user: number;
  eventType: "click" | "pageView";
  constructor(user: number, eventType: "click" | "pageView") {
    this.user = user;
    this.eventType = eventType;
  }
}
