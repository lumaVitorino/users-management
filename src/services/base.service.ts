import { Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';


export class BaseService {

    protected httpOptions: {};
    protected http: HttpClient;
    private oauthService: OAuthService;

    constructor(injector: Injector) {
        this.http = injector.get<HttpClient>(HttpClient);

        this.oauthService = injector.get<OAuthService>(OAuthService);
    }
    
     protected setupHttpOptions() {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }

    protected get<T>(url: string, options?: object): Observable<T> {
        this.setupHttpOptions();
        return this.handleResponse(this.http.get<T>(url, options || this.httpOptions));
    }

    protected post<T>(url: string, body: any, options?: object): Observable<T> {
        this.setupHttpOptions();
        return this.handleResponse(this.http.post<T>(url, body, options || this.httpOptions));
    }

    protected put<T>(url: string, body: any, options?: object): Observable<T> {
        this.setupHttpOptions();
        return this.handleResponse(this.http.put<T>(url, body, options || this.httpOptions));
    }
    protected delete<T>(url: string, options?: object): Observable<T> {
        this.setupHttpOptions();
        return this.handleResponse(this.http.delete<T>(url, options || this.httpOptions));
    }

    protected handleResponse<T>(response: Observable<T>): Observable<T> {
        return response;
    }

}
