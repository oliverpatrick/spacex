import axios, { AxiosResponse } from "axios";

export interface IResult<T> {
  content: T | null;
  message: string;
  status: number;
}

export function getRequest<T>(
  endpoint: string
): Promise<AxiosResponse<IResult<T>, unknown>> {
  return axios.get<IResult<T>>(`https://api.spacexdata.com/v4${endpoint}`);
}
