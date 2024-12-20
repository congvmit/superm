export interface ICart {
  id: number;
  price_id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface ICartState {
  items: ICart[];
}

export interface ICartProductAddPayload {
  id: number;
  price_id: string;
  name: string;
  price: number;
}
