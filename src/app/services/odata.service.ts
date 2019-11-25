import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, fromEventPattern } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUrlOptions } from '../models/odata.model';
import { RequestTypes } from '../models/odata.model';

@Injectable({
    providedIn: 'root'
  })
export class ODataService {

    constructor(
        private host: string,
        private http: HttpClient
    ) { }

    provideODataService(url: string) {
        return {
            provide: ODataService, useFactory: (http) => {
                return new ODataService(url, http);
            },
            deps: [HttpClient]
        };
    }
    private constructUrl(urlOptions: IUrlOptions): string {
        return this.host + urlOptions.restOfUrl;
    }


    // T specifies a generic output of function
    public Request<T>(requestType: RequestTypes, urlOptions: IUrlOptions, body?: any, options?: any): Observable<any> {
        let response: Observable<Response>;
        // True in case of post, put and patch
        if (body && options) {
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions), 
                body, 
                options);
        } else if (body) {
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions),
                body);
        } else if (options) {
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions),
                options);
        } else {
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions),
                options);
        }

        return response.pipe(map((res) => res.json()));
    }
}