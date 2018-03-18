import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { AUTH0_USER_SERVICE_CONFIG } from '../../../../environments/environment';
import { UserProfile } from './';

export class AccessToken {
    access_token: string;
    token_type = "Bearer";
}

@Injectable()
export class UserService {

    clientId = AUTH0_USER_SERVICE_CONFIG.clientID;
    clientSecret = AUTH0_USER_SERVICE_CONFIG.clientSecret;
    grantType = AUTH0_USER_SERVICE_CONFIG.grant;
    apiUrl = AUTH0_USER_SERVICE_CONFIG.api_url;
    tokenUrl = AUTH0_USER_SERVICE_CONFIG.token_url;

  constructor(private httpClient: HttpClient) {}

  getUser(id: string): UserProfile {
    this.getAccessToken()
      .subscribe((token: AccessToken) => {
          return this.getUserProfile(token, id);
        });
        return null;
  }

  getAccessToken(): Observable<AccessToken> {
    return this.httpClient
        .post<AccessToken>(`${this.tokenUrl}`, {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            grant_type: this.grantType,
            audience: this.apiUrl
        }, {
            headers: new HttpHeaders()
                .set('content-type', 'application/json')
        });
  }

  getUserProfile(token: AccessToken, id: string): Observable<UserProfile> {
    return this.httpClient
        .get<UserProfile>(`${this.apiUrl}`, {
            headers: new HttpHeaders()
                .set('authorization', `${token.token_type} ${token.access_token}`)
        })
        .pipe(
            catchError(this.handleError)
        );
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
