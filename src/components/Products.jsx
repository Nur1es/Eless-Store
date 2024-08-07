import React, { useState, useEffect } from 'react';
import ProductsCard from './ProductsCard';

export default function Products({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const productsPerPage = 12;


  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const newProducts = products.slice(0, indexOfLastProduct);
    setDisplayedProducts(newProducts);
  }, [currentPage, products]);

  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Best Shopping</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugit animi nam deserunt
          quas veniam quaerat expedita inventore alias velit perferendis nihil,
          voluptates fuga assumenda laboriosam sed. Distinctio, eaque laborum?
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {
          displayedProducts.map((item) => (
            <ProductsCard key={item.id} product={item} />
          ))
        }
      </div>
      <div className='flex justify-center items-center gap-4 py-4'>
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1} 
          className='px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50'
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className='px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
}
