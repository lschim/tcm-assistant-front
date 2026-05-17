import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Drug } from '../models/drug.model';
import { DrugCategoryApi } from '../api/drug-category.api';

@Injectable({ providedIn: 'root' })
export class DrugService {
  private drugsByCategory = signal<Record<number, Drug[]>>({});
  private drugCategoryApi = inject(DrugCategoryApi);

  getDrugs(categoryId: number): Drug[] {
    return this.drugsByCategory()[categoryId] ?? [];
  }

  getDrugsSignal(categoryId: number): Signal<Drug[]> {
    return computed(() => this.drugsByCategory()[categoryId] ?? []);
  }

  loadByCategory(categoryId: number) {
    if (this.drugsByCategory()[categoryId]) {
      return;
    }

    this.drugCategoryApi.getDrugsOfCategory(categoryId).subscribe({
      next: (drugsByCategory) => {
        this.drugsByCategory.update((current) => ({
          ...current,
          [categoryId]: drugsByCategory.drugs,
        }));
      },
      error: (err) => console.error(err),
    });
  }

  invalidate(categoryId: number) {
    this.drugsByCategory.update((current) => {
      const copy = { ...current };
      delete copy[categoryId];
      return copy;
    });
  }
}
