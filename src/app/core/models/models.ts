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
  card: Card;
  prerequisites: string;
  benefit: string;
  normal: string;
  special: string;
}

export interface Magic {
  id: string;
  card: Card;
  type: string;
  level: string;
  components: string;
  castTime: string;
  range: string;
  targetArea: string;
  duration: string;
  savingThrow: string;
  spellResistance: string;
  effect: string;
}
