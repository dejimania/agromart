import Axios from 'axios';
import { RestUrls } from './Urls'

export class RestDataSource {

  getData = (dataType, params) => {
    return this.sendRequest("get", RestUrls[dataType], params);
  }

  sendRequest = (method, url, params) => Axios.request({ method, url, params });
}