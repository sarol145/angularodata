import { Component, OnInit } from '@angular/core';
import { ODataService } from 'src/app/services/odata.service';
import { IUrlOptions, RequestTypes } from 'src/app/models/odata.model';

@Component({
  selector: 'app-odata',
  templateUrl: './odata.component.html',
  styleUrls: ['./odata.component.scss']
})
export class OdataComponent implements OnInit {

  public requestResult: any;

    constructor(
        private odata: ODataService
    ) { }

    ngOnInit() { }

    testGet() {
        let urlOptions: IUrlOptions = {} as IUrlOptions;
        urlOptions.restOfUrl = "Products?$format=json";
        this.odata.Request(RequestTypes.get, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testPost() {
        let urlOptions: IUrlOptions = {} as IUrlOptions;
        this.odata.Request(RequestTypes.post, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testPut() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        this.odata.Request(RequestTypes.put, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testPatch() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        this.odata.Request(RequestTypes.patch, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testDelete() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        this.requestResult = this.odata.Request(RequestTypes.delete, urlOptions);
    }

}
