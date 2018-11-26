export interface Plural<T> {
  totalCount: number;
  offset: number;
  limit: number;
  sortCol: string;
  sortAsc: boolean;
  items: T[];
  href?: string;
}

