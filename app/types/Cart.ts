export interface ICart {
  id: number;
  price_id: string;
  name: string;
  quantity: number;
}

export interface ICartProductAddPayload {
  id: number;
  price_id: string;
  name: string;
}
