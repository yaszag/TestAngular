import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsSelected: boolean;
  Api = 'assets/API/Data.json';
  data$: Observable<any[]>;
  title = 'SubMenu';
  constructor(private http: HttpClient) {
    this.data$ = this.getJSON();
  }
  public getJSON(): Observable<any> {
    return this.http.get(this.Api);
  }

}
