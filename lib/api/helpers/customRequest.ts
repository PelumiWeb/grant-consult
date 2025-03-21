import ConnectionError from '@/app/[locale]/utils/ConnectionError';
import ResponseError from '@/app/[locale]/utils/ResponseError';
import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../../store';
import { logout } from '../../features/User/userSlice';
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
    if (err?.response?.data?.status === 401 ) {
    console.log(err?.response?.data?.status, "this is from axios");

      store.dispatch(logout());
    }
    // if (!axios.isAxiosError(err)) throw err;

   if (axios.isAxiosError(err) && err.response) {
      throw err.response.data; //  This will return { status: 400, message: 'Invalid otp' }
    }

    throw new ConnectionError();
  }
}
