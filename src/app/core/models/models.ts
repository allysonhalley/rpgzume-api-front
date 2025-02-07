export interface Card {
  id: string;
  type: string;
  name: string;
  resume: string;
  description: string;
  book: string;
  page: number;
}

export interface Feature {
  id: string;
  type: string;
  name: string;
  resume: string;
  description: string;
  book: string;
  page: number;
  prerequisites: string;
  benefit: string;
  normal: string;
  special: string;
}

export interface Magic {
  id: string;
  name: string;
  level: string;
  book: string;
  page: number;
  type: string;
  components: string;
  castTime: string;
  range: string;
  targetArea: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  effect: string;
  resume: string;
  description: string;
}
