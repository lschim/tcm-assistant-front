import { DrugMovement } from '../models/drug-movement.model';

export const DRUG_MOVEMENT_LABELS: Record<DrugMovement, string> = {
  [DrugMovement.ASCENDING]: 'Ascendant',
  [DrugMovement.DESCENDING]: 'Descendant',
  [DrugMovement.OUTWARD]: 'Externe',
  [DrugMovement.INWARD]: 'Interne',
};
