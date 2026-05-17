import { DrugFlavor } from '../models/drug-flavor.model';

export const DRUG_FLAVOR_LABELS: Record<DrugFlavor, string> = {
  [DrugFlavor.SOUR]: 'Acide',
  [DrugFlavor.BITTER]: 'Amer',
  [DrugFlavor.SWEET]: 'Doux',
  [DrugFlavor.PUNGENT]: 'Piquant',
  [DrugFlavor.SALTY]: 'Salé',
  [DrugFlavor.BLAND]: 'Insipide',
  [DrugFlavor.AROMATIC]: 'Aromatique',
};
