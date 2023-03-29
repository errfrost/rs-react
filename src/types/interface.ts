export interface IProductCard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ICard {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  gender: string;
  photo: string;
  confirmData: boolean;
}

export interface IProducts {
  [key: string]: IProductCard[];
}
