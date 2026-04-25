export interface StockInfo {
  name: string;
  code: string;
  price: string;
  change: string;
  isUp: boolean;
  industry?: string;
  probValue?: number;
  probText?: string;
}
