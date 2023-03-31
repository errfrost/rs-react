import React from 'react';
import { IProductCard } from 'types/interface';

interface Props {
  product: IProductCard;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card" data-testid="product-card">
      <h3 className="product-card__title">{product.title}</h3>
      <div className="product-card__thumbnail">
        <img src={product.thumbnail} width="245" height="245" alt="" />
      </div>
      <div className="product-card__body">
        <span className="product-card__price">{product.price}$</span>
        <span className="product-card__category">{product.category}</span>
        <span className="product-card__brand">{product.brand}</span>
        <span className="product-card__rating">
          Rating: <b>{product.rating}</b>
        </span>
      </div>
    </div>
  );
}
