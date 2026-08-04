import { Heart, Landmark, Mountain, Utensils, Waves, type LucideIcon } from 'lucide-react';

export type IslandReason = readonly [LucideIcon, string, string];

export const islandReasons = [
  [Mountain, 'Unique Landscapes', 'Diverse sceneries from mountains to golden beaches and crystal-clear seas.'],
  [Landmark, 'Rich Culture', 'Step back in time with ancient history, UNESCO sites, and local traditions.'],
  [Waves, 'Crystal-Clear Waters', 'Swim in turquoise waters and explore secluded coves and pristine beaches.'],
  [Utensils, 'Authentic Flavors', 'Savor local gastronomy with fresh ingredients and time-honored recipes.'],
  [Heart, 'Warm Hospitality', 'Experience genuine Greek hospitality and personalized service at every turn.'],
] as const satisfies readonly IslandReason[];
