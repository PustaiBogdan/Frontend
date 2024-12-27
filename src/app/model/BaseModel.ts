export interface BaseModel<T> {
    fromJson(json: [], extras: any): T[];
  }
  