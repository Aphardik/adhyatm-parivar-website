"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { message, notification } from 'antd';
import { states } from '@/app/data/states';

import { FaSearch, FaShoppingCart, FaPlus, FaMinus, FaTrash, FaCheckCircle, FaShoppingBag, FaTimes, FaInfoCircle, FaFilter, FaBookOpen, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaSprayCanSparkles } from 'react-icons/fa6';

const BOOKS_API = "https://agtbook-backend-1.onrender.com/api/books";
const ORDERS_API = "https://agtbook-backend-1.onrender.com/api/orders";

const AgtBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    firstname: "", lastname: "", mobile: "", email: "", address: "", city: "", state: "", pincode: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [showPageDropdown, setShowPageDropdown] = useState(false);
  const [pageSearchTerm, setPageSearchTerm] = useState('');

  // Filter states
  const [selectedShreni, setSelectedShreni] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const limit = 10;

  useEffect(() => {
    fetchBooks(currentPage);
  }, [currentPage]);

  const fetchBooks = (page) => {
    setLoading(true);
    fetch(`${BOOKS_API}?page=${page}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setBooks(data.books || []);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalBooks(data.pagination?.total || 0);
        setLoading(false);
      })
      .catch(() => {
        setBooks([]);
        setLoading(false);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowPageDropdown(false);
    setPageSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const getFilteredPageNumbers = () => {
    const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (!pageSearchTerm) return allPages;
    return allPages.filter(page => page.toString().includes(pageSearchTerm));
  };

  const detectLanguage = (text) => {
    if (!text) return "English";
    const hindiPattern = /[\u0900-\u097F]/;
    const gujaratiPattern = /[\u0A80-\u0AFF]/;
    if (hindiPattern.test(text)) return "Hindi";
    if (gujaratiPattern.test(text)) return "Gujarati";
    return "English";
  };

  const getShreniDescription = (shreni, language) => {
    const descriptions = {
      "जैनधर्म परिचय": "जैन धर्म के मूलभूत सिद्धांतों का परिचय",
      "जैनागम": "जैन आगम ग्रंथों का संग्रह",
      "स्तोत्र": "भक्ति स्तोत्र और प्रार्थनाएं",
      "पूजा": "पूजा विधि और रीति-रिवाज",
      "नियम": "धार्मिक नियम और व्रत विधान"
    };
    return descriptions[shreni] || "विवरण उपलब्ध नहीं है।";
  };

  const getBookThumbnail = (srno) => {
    return `https://agtbook-backend-1.onrender.com/uploads/books/${srno}.webp`;
  };

  const filteredBooks = useMemo(() => {
    const result = books.filter(b => {
      const matchesSearch = (b.title || b.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (b.author || "").toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
    // Sort featured books first
    return result.sort((a, b) => {
      const aFeatured = a.isFeatured || a.featured;
      const bFeatured = b.isFeatured || b.featured;
      return (bFeatured ? 1 : 0) - (aFeatured ? 1 : 0);
    });
  }, [books, searchTerm]);

  const addToCart = (book) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (!existing) {
        notification.success({
          message: book.isAvailable ? "Added to Cart" : "Added to Wishlist",
          placement: "topRight",
          duration: 2,
        });
      } else {
        notification.info({
          message: book.isAvailable ? "Already in Cart" : "Already in Wishlist",
          placement: "topRight",
          duration: 2,
        });
      }
      return existing
        ? prev.map(item => (item.id === book.id) ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prev, { ...book, quantity: 1, id: book.id }];
    });
  };

  const updateQuantity = (id, delta) => setCart(prev => prev.map(item =>
    item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const cartTotal = cart.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
  const shippingCharge = cartTotal > 0 ? 100 : 0;

  const handleCheckout = async () => {
    if (!cart.length || !orderDetails.firstname || !orderDetails.mobile || !orderDetails.address) {
      return alert("Please fill required fields!");
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(ORDERS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...orderDetails,
          books: cart.map(i => ({ bookId: i.id || i.id, quantity: i.quantity })),
          shippingDetails: `${orderDetails.address}, ${orderDetails.city}, ${orderDetails.state} - ${orderDetails.pincode}`
        })
      });
      const data = await res.json();
      setOrderSuccess(data.orderId || data.id || "N/A");
      setCart([]);
      setOrderDetails({ firstname: "", lastname: "", mobile: "", email: "", address: "", city: "", state: "", pincode: "" });
      setShowCart(false);
    } catch {
      alert("Order failed!");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading && currentPage === 1) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div style={{ width: "100vw" }} className="min-h-screen font-heading bg-gray-50">
      {/* Header */}
      <div
        className="relative bg-cover bg-center py-4 sm:py-8 px-4"
        style={{ backgroundImage: "url('booklistheader.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

        {/* Cart Button – TOP RIGHT */}
        {!showCart && (
          <button
            onClick={() => setShowCart(!showCart)}
            className="absolute top-4 right-4 sm:top-6 sm:right-8 z-20
                  text-white px-4 py-3 rounded-sm shadow-2xl
                 hover:scale-105 transition-transform
                 flex items-center gap-3 font-semibold"
          >
            <FaShoppingCart size={22} />
            {/* <span className="hidden sm:inline">Cart</span> */}

            {cart.length > 0 && (
              <span className="absolute -top-2 font-s -right-2 bg-red-500 text-white text-xs
                         w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>
        )}

        <div className="relative z-10 w-full px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-white my-2 text-center drop-shadow-2xl">
            {showCart ? 'Your Shopping Cart' : 'AGT Books'}
          </h1>

          {!showCart && (
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-800" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full pl-14 pr-6 py-4 rounded-sm bg-white/95 backdrop-blur outline-none
                       focus:ring-4 focus:ring-amber-400 shadow-2xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </div>


      {!showCart ? (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm text-gray-600">
              Showing {((currentPage - 1) * limit) + 1}–{Math.min(currentPage * limit, totalBooks)} of {totalBooks} results
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="bg-white rounded-sm shadow-sm border animate-pulse">
                  <div className="aspect-[3/4] bg-gray-200"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredBooks.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {filteredBooks.map(book => {
                  const isFeatured = book.isFeatured || book.featured;
                  const isInCart = cart.some(item => item.id === book.id);

                  return (
                    <div key={book.srno || book.id} onClick={() => setSelectedBook(book)}
                      className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden border border-gray-200 relative">
                      {/* Featured Ribbon */}
                      {isFeatured && (
                        <div className="absolute top-0 right-0 z-10 w-24 h-24 overflow-hidden pointer-events-none">
                          <div className="absolute font-sans top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-10 py-1 transform rotate-45 translate-x-8 translate-y-2 shadow-md">
                            Featured
                          </div>
                        </div>
                      )}
                      <div className="relative aspect-[3/4] bg-gray-100">
                        <img
                          src={getBookThumbnail(book.srno) || book.image || "/book-placeholder.webp"}
                          alt={book.name || book.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => { e.target.src = book.image || "/book-placeholder.webp"; }}
                        />
                        {/* {(book.price || 0) > 0 ? (
                        <div className="absolute top-0 right-0 bg-gray-800 text-white px-2 py-1 text-xs font-bold">₹{book.price}</div>
                      ) : (
                        <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 text-xs font-bold">अमूल्य</div>
                      )} */}
                        {/* <div className="absolute top-0 left-0 bg-red-800 text-white px-2 py-1 text-xs font-bold">{book.srno || book.id}</div> */}
                      </div>
                      <div className="p-3">
                        <div className='h-24'>
                          <div className="text-xs text-gray-500 uppercase mb-1">{book.shreni || ""}</div>
                          <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                            <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-600 hover:underline hover:text-blue-800">
                              {book.name || book.title}
                            </a>
                          </h3>
                          <div className="space-y-1 text-xs text-gray-600 mb-3">
                            <div className="flex justify-between">
                              <span>भाषा:</span>
                              <span className="font-medium">{book.Language.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>आवृत्ति:</span>
                              <span className="font-medium">{book.edition}</span>
                            </div>
                          </div>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); addToCart(book); }}
                          className={`w-full text-white px-3 py-2 rounded text-sm font-semibold active:scale-95 transition-transform 
                          ${isFeatured && !book.isAvailable ? 'bg-amber-700 hover:bg-amber-800' : 'bg-amber-600 hover:bg-amber-700'}
                          ${isInCart ? 'bg-green-600 hover:bg-green-700' : ''}
                          font-sans`}>
                          {isInCart ? (
                            <> <FaCheckCircle className="inline mr-1" size={12} /> {book.isAvailable ? "Added to Cart" : "Waitlist  Joined"} </>
                          ) : (
                            <> <FaPlus className="inline mr-1" size={12} /> {book.isAvailable ? "Add to Cart" : "Join Waitlist"} </>
                          )}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {currentPage > 1 && (
                      <button onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                        ←
                      </button>
                    )}
                    {getPaginationNumbers().map((page, index) => (
                      page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">...</span>
                      ) : (
                        <button key={page} onClick={() => handlePageChange(page)}
                          className={`min-w-[40px] px-3 py-2 text-sm rounded font-medium transition-colors ${currentPage === page ? 'bg-red-800 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}>
                          {page}
                        </button>
                      )
                    ))}
                    {currentPage < totalPages && (
                      <button onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                        →
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <button onClick={() => setShowPageDropdown(!showPageDropdown)}
                      className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50">
                      <span className="text-gray-700">Go to page {currentPage}</span>
                      <svg className={`w-4 h-4 text-gray-500 transition-transform ${showPageDropdown ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showPageDropdown && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => { setShowPageDropdown(false); setPageSearchTerm(''); }} />
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-20">
                          <div className="p-3 border-b">
                            <input type="text" placeholder="Search page..."
                              value={pageSearchTerm} onChange={(e) => setPageSearchTerm(e.target.value)}
                              className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                              onClick={(e) => e.stopPropagation()} />
                          </div>
                          <div className="max-h-64 overflow-y-auto">
                            {getFilteredPageNumbers().map(page => (
                              <button key={page} onClick={() => handlePageChange(page)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${currentPage === page ? 'bg-red-50 text-red-800 font-semibold' : 'text-gray-700'
                                  }`}>
                                Page {page} {currentPage === page && <span className="float-right">✓</span>}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <FaBookOpen className="mx-auto text-gray-300 mb-4" size={60} />
              <p className="text-xl text-gray-500">No books found</p>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <button onClick={() => setShowCart(false)} className="mb-6 flex items-center gap-2 text-gray-600 hover:text-amber-700 font-semibold">
            <HiOutlineArrowRight className="rotate-180" /> Back to Books
          </button>

          {!cart.length ? (
            <div className="text-center py-20 bg-white rounded-lg">
              <FaShoppingBag className="mx-auto text-gray-300 mb-4" size={60} />
              <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
              <button onClick={() => setShowCart(false)} className="text-amber-700 font-bold underline">Continue Shopping</button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cart Items - 50% width */}
              <div className="space-y-4">
                {/* <h2 className="text-2xl font-bold mb-4">Cart Items ({cart.reduce((a, b) => a + b.quantity, 0)})</h2> */}
                {cart.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg p-4 shadow border border-gray-200 flex gap-4">
                    <img src={"/book-placeholder.webp" || getBookThumbnail(item.srno) || item.image}
                      className="w-20 h-28 object-cover rounded flex-shrink-0" alt={item.title || item.name} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title || item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{item.Language.name} • {item.edition}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-700">₹{(item.price || 0) * item.quantity}</span>
                        <div className="flex items-center gap-2">
                          {/* <div className="flex items-center bg-gray-100 rounded border">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gray-200">
                              <FaMinus size={10} />
                            </button>
                            <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gray-200">
                              <FaPlus size={10} />
                            </button>
                          </div> */}
                          <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Order Summary in Cart Items Section */}
                <div className="bg-white rounded-lg p-6 shadow border border-gray-200 mt-6">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cart.length} items)</span>
                      <span className="font-semibold">₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-semibold text-green-600">₹{shippingCharge}</span>
                    </div>
                    <div className="pt-3 border-t flex justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-bold text-amber-700">₹{cartTotal + shippingCharge}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Form - 50% width */}
              <div className="bg-white font-sans rounded-lg p-6 shadow border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Shipping Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">First Name *</label>
                      <input value={orderDetails.firstname}
                        onChange={(e) => setOrderDetails({ ...orderDetails, firstname: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Last Name *</label>
                      <input value={orderDetails.lastname}
                        onChange={(e) => setOrderDetails({ ...orderDetails, lastname: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Mobile *</label>
                    <input value={orderDetails.mobile}
                      onChange={(e) => setOrderDetails({ ...orderDetails, mobile: e.target.value })}
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Email</label>
                    <input value={orderDetails.email}
                      onChange={(e) => setOrderDetails({ ...orderDetails, email: e.target.value })}
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Address *</label>
                    <textarea value={orderDetails.address}
                      onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none h-24 resize-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">City *</label>
                      <input value={orderDetails.city}
                        onChange={(e) => setOrderDetails({ ...orderDetails, city: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Pincode *</label>
                      <input value={orderDetails.pincode}
                        onChange={(e) => setOrderDetails({ ...orderDetails, pincode: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">State *</label>
                    <select value={orderDetails.state}
                      onChange={(e) => setOrderDetails({ ...orderDetails, state: e.target.value })}
                      className="w-full font-heading bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none">
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button onClick={handleCheckout} disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all mt-6">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaShoppingBag size={18} /> Place Order
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Book Modal */}
      {selectedBook && (
        <div onClick={() => setSelectedBook(null)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold">{selectedBook.name || selectedBook.title}</h2>
              <button onClick={() => setSelectedBook(null)} className="p-2 hover:bg-gray-100 rounded-full">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-gray-100">
                  <img src={"/book-placeholder.webp"}
                    alt={selectedBook.name || selectedBook.title}
                    className="w-full h-full object-contain" />
                </div>
                <div className="space-y-6">
                  <div>
                    {/* <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase px-3 py-1 rounded-full mb-3">
                      {selectedBook.shreni || ""}
                    </span> */}
                    <h3 className="text-2xl font-bold mb-2">{selectedBook.name || selectedBook.title}</h3>
                    <p className="text-gray-600">{selectedBook.author || "Unknown Author"}</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    {selectedBook.description && (
                      <div>
                        <h4 className="font-bold mb-2">Description</h4>
                        <p className="text-gray-600">{selectedBook.description}</p>
                      </div>
                    )}
                    {(selectedBook.stockQty || 0) > 0 && <span className="text-green-600 font-semibold text-sm">In Stock</span>}
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4 border-y">
                    <div>
                      <p className="text-sm text-gray-500">Language</p>
                      <p className="font-semibold">{selectedBook.Language.name}</p>
                    </div>
                    {selectedBook.edition && <div>
                      <p className="text-sm text-gray-500">Edition</p>
                      <p className="font-semibold">{selectedBook.edition}</p>
                    </div>}
                    <div>
                      <p className="text-sm text-gray-500">Pages</p>
                      <p className="font-semibold">{selectedBook.pages || "N/A"}</p>
                    </div>
                    {selectedBook.vishay && <div>
                      <p className="text-sm text-gray-500">Vishay</p>
                      <p className="font-semibold">{selectedBook.vishay}</p>
                    </div>}
                    {selectedBook.prakashak && <div>
                      <p className="text-sm text-gray-500">Prakashak</p>
                      <p className="font-semibold">{selectedBook.prakashak}</p>
                    </div>}
                  </div>

                  <div className="flex font-sans gap-4 pt-4">
                    <button onClick={() => { addToCart(selectedBook); setSelectedBook(null); }}
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 active:scale-95">
                      <FaPlus /> {selectedBook.isAvailable ? "Add to Cart" : "Join to Wishlist"}
                    </button>
                    <button onClick={() => { addToCart(selectedBook); setSelectedBook(null); setShowCart(true); }}
                      className="flex-1 border-2 border-amber-600  text-amber-700 hover:bg-amber-50 font-bold py-4 rounded-lg active:scale-95">
                      {selectedBook.isAvailable ? "Order Now" : "Show Interest"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {orderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur">
          <div className="bg-white rounded-sm p-10 max-w-md w-full text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-500" size={50} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Order Successful!</h2>
            <p className="text-gray-600 mb-8">Thank you for your purchase!</p>
            <div className="bg-amber-50 rounded-xl p-6 mb-8 border-2 border-dashed border-amber-200">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-2">Order ID</span>
              <span className="text-2xl font-black text-amber-700">{orderSuccess}</span>
            </div>
            <button onClick={() => setOrderSuccess(null)}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-4 rounded-lg shadow-lg">
              Back to Store
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AgtBooks;