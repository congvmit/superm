export interface ICart {
  id: number;
  price_id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface ICartState {
  items: ICart[];
}

export interface ICartProductAddPayload {
  id: number;
  price_id: string;
  name: string;
  price: number;
  image: string;
}

export interface ICartProductSearchPayload {
  id: number;
}
