import { Component, inject, OnInit, signal } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { DrugCategoryService } from '../core/services/drug-category.service';
import { DrugService } from '../core/services/drug.service';
import { DrugViewComponent } from '../drug-view/drug-view';
import { DrugPreview } from '../drug-preview/drug-preview';
import { DrugCategoryApi } from '../core/api/drug.api';
import { DrugDetail } from '../core/models/drug.model';

@Component({
  selector: 'app-drugs-view',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    DrugViewComponent,
    DrugPreview,
  ],
  templateUrl: './drugs-view.html',
  styleUrl: './drugs-view.css',
})
export class DrugsView implements OnInit {
  private drugCategoryService = inject(DrugCategoryService);
  private drugApi = inject(DrugCategoryApi);
  drugService = inject(DrugService);
  selectedDrugId = signal<number | null>(null);
  selectedDrugDetail = signal<DrugDetail | null>(null);

  categories = this.drugCategoryService.categoriesSignal;

  ngOnInit() {
    this.drugCategoryService.load();
  }

  onOpenCategory(categoryId: number) {
    this.drugService.loadByCategory(categoryId);
  }

  toggleDrug(drugId: number) {
    if (this.selectedDrugId() === drugId) {
      this.selectedDrugId.set(null);
      this.selectedDrugDetail.set(null);
    } else {
      this.selectedDrugId.set(drugId);
      this.selectedDrugDetail.set(null);
      this.drugApi.getById(drugId).subscribe({
        next: (detail) => this.selectedDrugDetail.set(detail),
        error: (err) => console.error(err),
      });
    }
  }
}
