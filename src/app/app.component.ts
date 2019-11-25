import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Odata-Demo';
  tableData = [];
  searchText = '';
  constructor(private http: HttpService) {}

  ngOnInit() {
  }

  onFetchData() {
    this.http.getData('Products', this.searchText).subscribe((data: any) => {
      this.tableData = data.value || [];
    });
  }
}
