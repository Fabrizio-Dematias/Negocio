import React from 'react'
import ProductCard from '../components/ProductCard'

const Product = () => {
    const products = [
        { id: 1, name: 'PRODUCTO 1', price: 'PRECIO' },
        { id: 2, name: 'PRODUCTO 2', price: 'PRECIO' },
        { id: 3, name: 'PRODUCTO 3', price: 'PRECIO' },
    ];

  return (
    <main className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    </main>
  )
}

export default Product