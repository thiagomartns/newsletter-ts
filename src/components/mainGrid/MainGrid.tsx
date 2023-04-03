import React, { useEffect, useState } from 'react'
import ProductComponent from '../productComponent/ProductComponent';
import './mainGrid.scss';
import useFetch from '../../hooks/useFetch';

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

const MainGrid = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);

  const { data, isPending, error } = useFetch<ProductResponse | null>(
    `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${currentPage}`
  );

  useEffect(() => {
    if (data) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="main-grid">
      <h1 className="main-title">Sua seleção especial</h1>
      <div className="all-products-container">
        <ProductComponent products={products} />
      </div>
      <button 
        className="more-products--btn buy-btn"
        onClick={handleLoadMore}
      >
        Ainda mais produtos aqui!
      </button>
    </div>
  )
}

export default MainGrid