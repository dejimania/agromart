import Axios from 'axios';
import { RestUrls } from './Urls'

export class RestDataSource {

  getData = (dataType) => {
    this.sendRequest("get", RestUrls[dataType]);
  }

  sendRequest = (method, url) => Axios.request({ method, url });
}