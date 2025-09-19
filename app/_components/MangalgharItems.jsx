"use client"
import React, { useState, useEffect } from 'react';
import { IoClose, IoChevronBack, IoChevronForward, IoRefresh } from 'react-icons/io5';

const MangalgharProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.adhyatmparivar.com/apmangalgharapi/mangalghar/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      
      // Extract unique categories
      const uniqueCategories = ['All', ...new Set(data.map(product => product.category))];
      setCategories(uniqueCategories);
      
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentIndex(filteredProducts.findIndex(p => p.productId === product.productId));
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const navigateProduct = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredProducts.length 
      : currentIndex === 0 ? filteredProducts.length - 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex);
    setSelectedProduct(filteredProducts[newIndex]);
  };

  const getImageUrl = (productId, imageUrl) => {
    return `https://api.adhyatmparivar.com/product-images/${productId}/${imageUrl}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <IoRefresh className="w-8 h-8 animate-spin mx-auto mb-4 text-black" />
          <p className="text-black text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">Error: {error}</p>
          <button 
            onClick={fetchProducts}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-heading bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-2">मंगलघर प्रोडक्ट्स</h1>
          <p className="text-gray-600 text-lg">Discover our collection of traditional items</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterByCategory(category)}
                className={`px-6 py-3 rounded-full border-2 transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-300 hover:border-black hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 font-heading md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.productId}
              onClick={() => openModal(product)}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden  hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={getImageUrl(product.productId, product.productImageUrl)}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f3f4f6"/><text x="50" y="50" font-family="Arial" font-size="12" fill="%236b7280" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-black mb-2 line-clamp-2">{product.title}</h3>
                {product.description && (
                  <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}

        {/* Modal */}
        {selectedProduct && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all"
              >
                <IoClose className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateProduct('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 transition-all"
              >
                <IoChevronBack className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={() => navigateProduct('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 transition-all"
              >
                <IoChevronForward className="w-6 h-6 text-white" />
              </button>

              {/* Header with Title and Description */}
              <div className="bg-slate-700 px-6 py-4 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-200 mb-2 pr-12">{selectedProduct.title}</h2>
                {selectedProduct.description && (
                  <p className="text-gray-300 text-base leading-relaxed pr-12">{selectedProduct.description}</p>
                )}
              </div>

              {/* Image Container */}
              <div className="bg-slate-800 flex items-center justify-center overflow-auto max-h-[85vh]">
                <img
                  src={getImageUrl(selectedProduct.productId, selectedProduct.productImageUrl)}
                  alt={selectedProduct.title}
                  className="max-h-[78vh] max-w-full object-contain p-4"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23e5e7eb" stroke="%23d1d5db" stroke-width="2"/><text x="200" y="140" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle">No Image Available</text><text x="200" y="170" font-family="Arial" font-size="14" fill="%239ca3af" text-anchor="middle">{selectedProduct.title}</text></svg>';
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MangalgharProducts;