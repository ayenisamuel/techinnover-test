export class StandardResponse {
  status: boolean;
  message: string;
  data: any | null;

  constructor(message: string, status: boolean, data: any | null = {}) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  public static SuccessMessage = (message = "success", data = {}) => {
    return new StandardResponse(message, true, data);
  };

  public static ErrorMessage = (
    message = "Your request cannot be proccessed at this time. Please try again later",
    data = null
  ) => {
    return new StandardResponse(message, false, data);
  };

  public static ServerError = () => {
    let mess =
      "Dear customer, we tried processing your request. However, there seems to be a connectivity issue. We advise you try again shortly.";
    return new StandardResponse(mess, false);
  };

  public static TokenError = () => {
    let message =
      "Dear customer, your session has expired. Please login again to proceed";
    return new StandardResponse(message, false);
  };
}
