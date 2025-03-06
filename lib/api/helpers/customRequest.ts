import ConnectionError from '@/app/[locale]/utils/ConnectionError';
import ResponseError from '@/app/[locale]/utils/ResponseError';
import axios, { AxiosRequestConfig } from 'axios';
// import ResponseError from '../../../utils/ResponseError';
// import ConnectionError from '../../../utils/ConnectionError';

export interface Transformer<In, Out> {
  (data: In): Out;
}

export default async function customRequest<T, R = T>(
  path: string,
  options?: AxiosRequestConfig,
  transform?: Transformer<T, R>
): Promise<R> {
  try {
    const res = await axios(path, options);

    if (transform) {
      return transform(await res.data);
    }

    return res.data;
  } catch (err:any) {
    console.log(err, err?.message, err?.response?.data, "this is from axios");
    // if (!axios.isAxiosError(err)) throw err;

   if (axios.isAxiosError(err) && err.response) {
      throw err.response.data; //  This will return { status: 400, message: 'Invalid otp' }
    }

    throw new ConnectionError();
  }
}
