import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drug } from '../core/models/drug.model';
import { DRUG_FLAVOR_LABELS } from '../core/i18n/drug-flavor.labels';
import { DRUG_MOVEMENT_LABELS } from '../core/i18n/drug-movement.labels';
import { DRUG_NATURE_LABELS } from '../core/i18n/drug-nature.labels';
import { ORGAN_LABELS } from '../core/i18n/organ.labels';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drug-preview',
  imports: [CommonModule],
  templateUrl: './drug-preview.html',
  styleUrl: './drug-preview.css',
})
export class DrugPreview {
  @Input({ required: true }) drug!: Drug;
  @Input() expanded = false;
  @Output() userClickPreview = new EventEmitter<void>();

  toggle() {
    this.userClickPreview.emit();
  }

  // i18n helpers
  readonly flavorLabels = DRUG_FLAVOR_LABELS;
  readonly movementLabels = DRUG_MOVEMENT_LABELS;
  readonly natureLabels = DRUG_NATURE_LABELS;
  readonly organLabels = ORGAN_LABELS;
}
