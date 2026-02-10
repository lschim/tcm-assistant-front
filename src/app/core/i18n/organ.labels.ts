import { Organ } from '../models/organ.model';

export const ORGAN_LABELS: Record<Organ, string> = {
  [Organ.LIVER]: 'Foie',
  [Organ.GALLBLADDER]: 'Vésicule biliaire',
  [Organ.HEART]: 'Cœur',
  [Organ.SMALL_INTESTINE]: 'Intestin grêle',
  [Organ.SPLEEN]: 'Rate',
  [Organ.STOMACH]: 'Estomac',
  [Organ.LUNGS]: 'Poumon',
  [Organ.LARGE_INTESTINE]: 'Gros intestin',
  [Organ.KIDNEYS]: 'Reins',
  [Organ.BLADDER]: 'Vessie',
  [Organ.PERICARDIUM]: 'Maître du Cœur',
  [Organ.TRIPLE_BURNER]: 'Triple Réchauffeur'
};
