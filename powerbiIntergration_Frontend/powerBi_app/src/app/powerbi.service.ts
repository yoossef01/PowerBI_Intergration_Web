import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PowerbiService {

  constructor(private http: HttpClient) {}

  getEmbedInfo(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/getembedinfo');
  }
}
