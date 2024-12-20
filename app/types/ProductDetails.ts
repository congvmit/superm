export interface IProductDetails {
  description?: string;
  id?: number;
  image?: string;
  name?: string;
  nutrition?: Nutrition;
  price?: number;
  price_id?: string;
  storage?: string;
}

export interface Nutrition {
  carbs?: number;
  fat?: number;
  protein?: number;
  salt?: number;
}
