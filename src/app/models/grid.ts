import { GridItem } from './grid-item';

export interface Grid {
  id: number | null;
  name: string;
  gridItems: GridItem[];
}
