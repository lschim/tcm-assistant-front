import { DrugNature } from '../models/drug-nature.model';

export const DRUG_NATURE_LABELS: Record<DrugNature, string> = {
  [DrugNature.HOT]: 'Chaud',
  [DrugNature.WARM]: 'Tiède',
  [DrugNature.NEUTRAL]: 'Neutre',
  [DrugNature.COOL]: 'Frais',
  [DrugNature.COLD]: 'Froid',
};
