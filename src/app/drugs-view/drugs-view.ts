import { Component, inject, OnInit, signal } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
  MatExpansionPanelDescription,
} from '@angular/material/expansion';
import { DrugCategoryService } from '../core/services/drug-category.service';
import { DrugService } from '../core/services/drug.service';
import { DrugViewComponent } from '../drug-view/drug-view';
import { DrugPreview } from '../drug-preview/drug-preview';

@Component({
  selector: 'app-drugs-view',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    DrugViewComponent,
    DrugPreview,
  ],
  templateUrl: './drugs-view.html',
  styleUrl: './drugs-view.css',
})
export class DrugsView implements OnInit {
  private drugCategoryService = inject(DrugCategoryService);
  drugService = inject(DrugService);
  selectedDrugId = signal<number | null>(null);

  categories = this.drugCategoryService.categoriesSignal;
  ngOnInit() {
    this.drugCategoryService.load();
  }

  onOpenCategory(categoryId: number) {
    this.drugService.loadByCategory(categoryId);
  }

  toggleDrug(drugId: number) {
    this.selectedDrugId.set(this.selectedDrugId() === drugId ? null : drugId);
  }
}
