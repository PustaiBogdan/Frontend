import { ApiError } from "./ApiError";

export class LoadableState<T> {
  public data: T;
  public isLoading: boolean;
  public error: ApiError;

  constructor(data: T, isLoading: boolean, error: ApiError) {
    this.data = data;
    this.isLoading = isLoading;
    this.error = error;
  }

}
