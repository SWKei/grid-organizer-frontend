import { GridItem } from './grid-item';

export interface Grid {
  id: number | undefined;
  name: string;
  gridItems: GridItem[];
}
