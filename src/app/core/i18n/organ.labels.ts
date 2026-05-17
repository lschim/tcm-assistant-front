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
  [Organ.TRIPLE_BURNER]: 'Triple Réchauffeur',
};

export const ORGAN_SHORT_LABELS: Record<Organ, string> = {
  [Organ.LIVER]: 'F',
  [Organ.GALLBLADDER]: 'VB',
  [Organ.HEART]: 'C',
  [Organ.SMALL_INTESTINE]: 'IG',
  [Organ.SPLEEN]: 'Rt',
  [Organ.STOMACH]: 'E',
  [Organ.LUNGS]: 'P',
  [Organ.LARGE_INTESTINE]: 'GI',
  [Organ.KIDNEYS]: 'R',
  [Organ.BLADDER]: 'V',
  [Organ.PERICARDIUM]: 'MC',
  [Organ.TRIPLE_BURNER]: '3R',
};
