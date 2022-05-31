/*
 * @Author: wangrui
 * @Date: 2022-04-12 15:11:08
 * @LastEditors: wangrui
 * @Description:
 * @LastEditTime: 2022-04-14 17:27:45
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { ElMessage } from 'element-plus';

const Message: any = {
  0: '服务器数据处理成功返回请求的数据。',
  301: '请求次数已经超过本周期设置的最大值',
  302: '请求频率已超过设定的最大值。',
  303: '该接口工作繁忙，产生拥堵，请稍后再试。',
  304: '',
  400: '请求参数错误',
  401: '规定的必传入项没有传入',
  402: '传入的参数项格式不符合规定',
  403: '没有相关权限，请联系管理员',
  404: '请求API不存在',
  405: '查询到重复数据',
  406: '传入的参数编码格式失效',
  407: '未查询到指定信息',
  408: '用户名参数错误，导致登录失败',
  409: '密码参数错误，导致登录失败',
  501: '服务器内部错误',
  502: '插入操作错误',
  503: '更新操作错误',
  504: 'XMPP服务连接暂时失效',
  600: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  601: '用户没有权限（令牌、用户名、密码错误）。',
  603: '用户得到授权，但是访问是被禁止的。',
  604: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  606: '请求的格式不可得。',
  610: '请求的资源被永久删除，且不会再得到的。',
  622: '当创建一个对象时，发生一个验证错误。',
  700: '服务器发生错误，请检查服务器。',
  702: '网关错误。',
  703: '服务不可用，服务器暂时过载或维护。',
  704: '网关超时。',
};

class Request {
  constructor() {
    this.instanceInterceptorRequest();
    this.instanceInterceptorResponse();
  }

  private static instance = axios.create({
    baseURL: '',
    // withCredentials: true, // 跨域带上soket
    timeout: 60000,
  });

  // 请求拦截
  private instanceInterceptorRequest() {
    Request.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (err) => {
        ElMessage.error('数据请求不正确，请联系管理员');
        console.error('axios.request->', err);
        return Promise.reject(err);
      }
    );
  }

  // 响应拦截
  private instanceInterceptorResponse() {
    Request.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const res = response.data;
        if (response.status === 200) {
          return res.data || res;
        } else {
          const error =
            Message[response.status] ||
            res.errorMsg ||
            Message[Number(res.responseCode)] ||
            '服务器内部错误';
          ElMessage.error('错误：' + error);
        }
        return Promise.reject(response);
      },
      (err) => {
        let errorMessage;
        if (err) {
          if (err.response) {
            errorMessage = Message[err.response.status];
          } else if (err.message && err.message.indexOf('timeout') >= 0) {
            errorMessage = '网络请求超时，请检查网络环境';
          } else if (err.message && err.message.indexOf('Network Error') >= 0) {
            errorMessage = '网络延迟，请检查网络环境';
          }
        }
        if (!errorMessage) {
          errorMessage = '数据请求出错，请联系管理员';
        }
        ElMessage.error(errorMessage);
        console.error('axios.response->', err);
        return Promise.reject(err);
      }
    );
  }

  public get<T>(
    url: string,
    params: AxiosRequestConfig,
    config: AxiosRequestConfig
  ): Promise<T> {
    return Request.instance.get(url, {
      params: {
        ...params,
      },
      paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
      ...config,
    });
  }

  public post<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return instance.post(url, params);
  }
}

const instance = axios.create({
  baseURL: '',
  // withCredentials: true, // 跨域带上soket
  timeout: 60000,
});

// export default {
//   all: axios.all,
//   spread: axios.spread,
//   config(config: any) {
//     instance.defaults = config;
//   },
//   get(url: string, data: any, config: AxiosRequestConfig<any>) {
//     return Reinstance.get(url, {
//       params: {
//         ...data,
//       },
//       paramsSerializer(params) {
//         return qs.stringify(params, { arrayFormat: 'repeat' });
//       },
//       ...config,
//     });
//   },
//   post(url: string, data: any, config: AxiosRequestConfig<any> | undefined) {
//     return instance.post(url, data);
//   },
// };
export const request = new Request();
