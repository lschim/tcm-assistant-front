import { HttpClient } from '@angular/common/http';
import { Drug } from '../models/drug.model';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.dev';

@Injectable({ providedIn: 'root' })
export class DrugApi {
  private http = inject(HttpClient);

  getById(id: number) {
    return this.http.get<Drug>(`${environment.apiBaseUrl}/api/drugs/${id}`);
  }
}
