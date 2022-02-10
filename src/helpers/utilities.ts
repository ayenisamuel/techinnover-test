export class Utilities {
  public static MapTo<T>(data: any) {
    let jsonString = JSON.stringify(data);
    return JSON.parse(jsonString) as T;
  }
}
