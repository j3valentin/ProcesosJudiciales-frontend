import {Injectable}     from 'angular2/core';
import {Http, Headers,
        RequestOptions} from 'angular2/http';

@Injectable()
export class SeguridadService {
  private _authUrl = '/judiciales/api/login';  // URL to web api

  constructor (private http: Http) {}

  auth() {
    let body = JSON.stringify({
      'user': 'victor',
      'password': 'secret'
    });
//    let body = model.toJSON();
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._authUrl, body, options);
  }
}
