import { HttpClient } from '@angular/common/http';
import { Drug } from '../models/drug.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.dev';

@Injectable({ providedIn: 'root' })
export class DrugApi {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get<Drug>(`${environment.apiBaseUrl}/api/drugs/${id}`);
  }
}
