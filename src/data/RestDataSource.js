import Axios from 'axios';
import { RestUrls } from './Urls'

export class RestDataSource {
  constructor(err_handler) {
    this.err_handler = err_handler || (() => {});
  }

  getData = (dataType, params) => {
    return this.sendRequest("get", RestUrls[dataType], params);
  }

  StoreData = (dataType, data) => {
    return this.sendRequest("post", RestUrls[dataType], {}, data);
  }

  sendRequest = (method, url, params, data) => Axios.request({
    method, url, params, data 
  });
}