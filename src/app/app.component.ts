import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { ODataService } from './services/odata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Odata-Demo';
  tableData = [];
  searchText = '';
  constructor(private http: HttpService, private odata: ODataService) {}

  ngOnInit() {
  }

  onFetchData() {
    const query = this.odata.toODataQuery(this.searchText);
    this.http.getData('Products', query).subscribe((data: any) => {
      this.tableData = data.value || [];
    });
  }
}
