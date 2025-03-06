import { AxiosRequestConfig } from "axios";
import customRequest, { Transformer } from "./helpers/customRequest";

class Api {
  url: string;

  private readonly defaultHeaders: {
    Authorization: string;
    "Content-Type": string;
  };

  constructor(url: string) {
    this.url = url;
    this.defaultHeaders = { 
      Authorization: "",
      "Content-Type": "application/json",
    };

    this.setAuth = this.setAuth.bind(this);
  }

  setAuth(accessToken: string) {
    this.defaultHeaders.Authorization = `Bearer ${accessToken}`;
  }

  get<T, R = T>(
    path: string,
    options?: AxiosRequestConfig,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      { method: "GET", ...options },
      transform
    );
  }

  post<T, R = T>(
    path: string,
    body: Record<string, unknown>,
    options?: AxiosRequestConfig,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "POST",
        data: body,
        ...options,
      },
      transform
    );
  }
    patch<T, R = T>(
    path: string,
    body: Record<string, unknown>,
    options?: AxiosRequestConfig,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "PATCH",
        data: body,
        ...options,
      },
      transform
    );
  }

  put<T, R = T>(
    path: string,
    body: Record<string, unknown>,
    options?: AxiosRequestConfig,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "PUT",
        data: body,
        ...options,
      },
      transform
    );
  }

  delete<T, R = T>(
    path: string,
    body?: Record<string, unknown>,
    options?: AxiosRequestConfig,
    transform?: Transformer<T, R>
  ) {
    return this.request<T, R>(
      `${this.url}/${path}`,
      {
        method: "DELETE",
        data: body,
        ...options,
      },
      transform
    );
  }

  private request: typeof customRequest = (path, options, transform) =>
    customRequest(
      path,
      {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...(options?.headers || {}),
        },
      },
      transform
    );
}

export const apiInstance = new Api(process.env.NEXT_PUBLIC_API_URL || "");

export default Api;
