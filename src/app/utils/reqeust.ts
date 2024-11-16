// 封装axios请求
import axios, { AxiosRequestConfig } from 'axios';
const controller = new AbortController();
import { cache } from 'react';

export const request = async (url: string, params?: Omit<AxiosRequestConfig, 'url'>) => {
    const method = params?.method || 'get';
    const res = await axios({ ...params, method, url });
    return res.data;
};

export const requestWithCancel = (url: string, params?: Omit<AxiosRequestConfig, 'url'>) => {
    const method = params?.method || 'get';
    const req = new Promise((resolve, reject) => {
        return axios({ ...params, method, url, signal: controller.signal })
            .then(resolve)
            .catch(reject);
    });

    return { req, cancel: () => controller.abort() };
};



// 缓存请求
export const requestCache = cache(request);
