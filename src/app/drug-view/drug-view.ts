import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drug } from '../core/models/drug.model';
import { DRUG_FLAVOR_LABELS } from '../core/i18n/drug-flavor.labels';
import { DRUG_MOVEMENT_LABELS } from '../core/i18n/drug-movement.labels';
import { DRUG_NATURE_LABELS } from '../core/i18n/drug-nature.labels';
import { ORGAN_LABELS } from '../core/i18n/organ.labels';

@Component({
  selector: 'app-drug-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drug-view.html',
  styleUrls: ['./drug-view.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrugViewComponent {
  @Input({ required: true }) drug!: Drug;

  // i18n helpers
  readonly flavorLabels = DRUG_FLAVOR_LABELS;
  readonly movementLabels = DRUG_MOVEMENT_LABELS;
  readonly natureLabels = DRUG_NATURE_LABELS;
  readonly organLabels = ORGAN_LABELS;
}
