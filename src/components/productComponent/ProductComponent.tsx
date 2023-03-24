import React from 'react'
import useFetch from '../../hooks/useFetch';
import './productComponent.scss';

interface Product {
  id: number;
  name: string;
  image: string;
  oldPrice: number;
  price: number;
  description: string;
}

interface ProductResponse {
  products: Product[];
}

const ProductComponent = () => {

  const { data: products, isPending, error } = useFetch<ProductResponse>(
    'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
  );

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!products) return <p>No products found</p>;

  return (
    <>
      {products?.products.map((product) => (
        <div className="product-container">
          <img src={product.image} />
          <div className="product-container--info">
            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">
              {product.description}
            </p>
            <p className="product-old-price misc">De: R${product.oldPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <h2 className="product-new-price">Por: R${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
            <p className="misc">ou 2x de R${(product.price / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <button className="buy-btn">Comprar</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductComponent