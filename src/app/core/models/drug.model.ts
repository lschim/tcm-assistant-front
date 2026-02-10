import { DrugFlavor } from './drug-flavor.model';
import { DrugMovement } from './drug-movement.model';
import { DrugNature } from './drug-nature.model';
import { Organ } from './organ.model';

export interface Drug {
  id: number;
  name: string;
  latinName?: string;
  frenchName?: string;
  alternativeChineseNames?: string[];
  nature?: DrugNature;
  flavors?: DrugFlavor[];
  movements?: DrugMovement[];
  tropism?: Organ[];
  contraindications?: string[];
  effects?: string[];
  dosage?: string;
  numberOfStars?: number;
  categoryId?: number;
  additionalNotes?: string;
}
