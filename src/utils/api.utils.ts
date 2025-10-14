import { ApiError } from '@/types';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export async function makeApiRequest<T>({
  headers,
  baseURL,
  data,
  params,
  method,
  url,
}: AxiosRequestConfig): Promise<T> {
  try {
    const config: AxiosRequestConfig = {
      headers: headers ? headers : { 'Content-Type': 'application/json' },
      baseURL: baseURL ? baseURL : process.env.NEXT_PUBLIC_API_BASE_URL,
      data,
      params,
      method: method ? method : 'GET',
      url,
    };

    const response: AxiosResponse<T> = await axios(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{
        message: string;
        status: number;
      }>;

      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        'Unknown error';

      const errorStatus = axiosError.response?.status ?? 500;

      const apiError = new Error(errorMessage) as ApiError;

      apiError.status = errorStatus;

      throw apiError;
    } else {
      console.error('Unexpected Error:', (error as Error).message);
      throw error;
    }
  }
}
