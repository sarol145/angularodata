import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  postServiceURL = 'https://services.odata.org/V3/(S(y5cgwl2bebbjidizukbuuoek))/OData/OData.svc';
  constructor(private http: HttpClient) { }

  getData(entity: string, query?: string) {
    const req = query ? `${this.postServiceURL}/${entity}?$${query}` : `${this.postServiceURL}/${entity}`;
    return this.http.get(req);
  }
  onPostData(entity: string) {
    const data = {
      Description: 'Whole grain bread',
      DiscontinuedDate: null,
      ID: 15,
      Name: 'Bread',
      Price: 2.5,
      Rating: 4,
      ReleaseDate: '1992-01-01T00:00:00',
    };
    const header = new HttpHeaders();
    header.append('Access-Control-Allow-Headers', '*');
    const options = { headers: header};
    return this.http.post(`${this.postServiceURL}/${entity}`, data, options);
  }
}
