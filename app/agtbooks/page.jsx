"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { notification } from 'antd';
import { states } from '@/app/data/states';

import {
  FaSearch, FaShoppingCart, FaPlus, FaTrash, FaCheckCircle,
  FaShoppingBag, FaTimes, FaFilter, FaBookOpen, FaChevronDown,
  FaChevronUp, FaStar
} from 'react-icons/fa';
import { HiOutlineArrowRight } from 'react-icons/hi';

const BOOKS_API = "https://agt-api.adhyatmparivar.com/api/books";
const ORDERS_API = "https://agt-api.adhyatmparivar.com/api/orders";
const LIMIT = 10;

// ─── Build query string from active filters ───────────────────────────────────
const buildQueryString = ({ page, search, languageIds, categoryIds, isAvailable }) => {
  const params = new URLSearchParams();
  params.set('page', page);
  params.set('limit', LIMIT);
  if (search) params.set('search', search);
  if (isAvailable !== 'all') params.set('isAvailable', isAvailable === 'available' ? 'true' : 'false');
  languageIds.forEach(id => params.append('languageId', id));
  categoryIds.forEach(id => params.append('categoryId', id));
  return params.toString();
};

const BookDetailModal = ({ book, onClose, onAddToCart, onOrderNow }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null); // 'left' | 'right'
  const [animating, setAnimating] = useState(false);

  const images = [book.frontImage, book.backImage].filter(Boolean);

  const goTo = (idx) => {
    if (animating || images.length <= 1) return;
    const next = (idx + images.length) % images.length;
    setDirection(next > activeIndex ? 'left' : 'right');
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(next);
      setAnimating(false);
      setDirection(null);
    }, 320);
  };

  // Swipe support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(activeIndex + (diff > 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .slide-in-left  { animation: slideInLeft  0.32s cubic-bezier(.4,0,.2,1) forwards; }
        .slide-in-right { animation: slideInRight 0.32s cubic-bezier(.4,0,.2,1) forwards; }
      `}</style>

      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10 rounded-t-xl">
          <h2 className="text-xl font-bold truncate pr-4">{book.name || book.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">

            {/* ── Carousel ── */}
            <div className="flex flex-col gap-3">

              {/* Main image container */}
              <div
                className="relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-md group select-none"
                style={{ minHeight: '360px' }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center p-4" style={{ minHeight: '360px' }}>
                  <img
                    key={activeIndex}
                    src={images[activeIndex] || '/book-placeholder.webp'}
                    alt={`${book.name || book.title} — ${activeIndex === 0 ? 'Front' : 'Back'} cover`}
                    className={`max-h-[400px] w-full object-contain ${animating
                      ? direction === 'left' ? 'slide-in-left' : 'slide-in-right'
                      : ''
                      }`}
                    onError={e => { e.target.src = '/book-placeholder.webp'; }}
                  />
                </div>

                {/* Cover label pill */}
                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {activeIndex === 0 ? 'Front Cover' : 'Back Cover'}
                </div>

                {/* Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => goTo(activeIndex - 1)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-400 text-gray-700 hover:text-amber-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => goTo(activeIndex + 1)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-400 text-gray-700 hover:text-amber-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Dot indicators + thumbnails */}
              {images.length > 1 && (
                <div className="flex flex-col items-center gap-3">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`rounded-full transition-all duration-300 ${activeIndex === idx
                          ? 'w-6 h-2.5 bg-amber-500'
                          : 'w-2.5 h-2.5 bg-gray-300 hover:bg-amber-300'
                          }`}
                        aria-label={idx === 0 ? 'Front cover' : 'Back cover'}
                      />
                    ))}
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-3 justify-center">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        className={`relative w-14 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${activeIndex === idx
                          ? 'border-amber-500 shadow-md scale-105'
                          : 'border-gray-200 hover:border-amber-300 opacity-60 hover:opacity-100'
                          }`}
                      >
                        <img
                          src={img}
                          alt={idx === 0 ? 'Front' : 'Back'}
                          className="w-full h-full object-contain bg-gray-50"
                          onError={e => { e.target.src = '/book-placeholder.webp'; }}
                        />
                        <div className={`absolute bottom-0 inset-x-0 text-[8px] font-bold text-center py-0.5 ${activeIndex === idx ? 'bg-amber-500 text-white' : 'bg-black/40 text-white'
                          }`}>
                          {idx === 0 ? 'Front' : 'Back'}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Book details ── */}
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold mb-1">{book.name || book.title}</h3>
                <p className="text-gray-500 text-sm">{book.author || 'Unknown Author'}</p>
              </div>

              {book.description && (
                <div>
                  <h4 className="font-bold mb-1.5 text-gray-700">Description</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{book.description}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 py-4 border-y border-gray-100">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-0.5">Language</p>
                  <p className="font-semibold text-sm">{book.Language?.name}</p>
                </div>
                {book.edition && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-0.5">Edition</p>
                    <p className="font-semibold text-sm">{book.edition}</p>
                  </div>
                )}
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-0.5">Pages</p>
                  <p className="font-semibold text-sm">{book.pages || 'N/A'}</p>
                </div>
                {book.Category?.name && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-0.5">Category</p>
                    <p className="font-semibold text-sm">{book.Category.name}</p>
                  </div>
                )}
                {book.vishay && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-0.5">Vishay</p>
                    <p className="font-semibold text-sm">{book.vishay}</p>
                  </div>
                )}
                {book.prakashak && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-0.5">Prakashak</p>
                    <p className="font-semibold text-sm">{book.prakashak}</p>
                  </div>
                )}
              </div>

              <div className="flex font-sans gap-3 pt-2">
                <button
                  onClick={() => onAddToCart(book)}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <FaPlus size={13} />
                  {book.isAvailable ? 'Add to Cart' : 'Join Wishlist'}
                </button>
                <button
                  onClick={() => onOrderNow(book)}
                  className="flex-1 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-bold py-3.5 rounded-xl active:scale-95 transition-all"
                >
                  {book.isAvailable ? 'Order Now' : 'Show Interest'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgtBooks = () => {
  // ─── Books & pagination ──────────────────────────────────────────────────────
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPageDropdown, setShowPageDropdown] = useState(false);
  const [pageSearchTerm, setPageSearchTerm] = useState('');

  // ─── Filter state ────────────────────────────────────────────────────────────
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState(''); // controlled input, debounced → search
  const [selectedLanguageIds, setSelectedLanguageIds] = useState([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [featuredFilter, setFeaturedFilter] = useState(false);

  // ─── Filter option lists (fetched once) ─────────────────────────────────────
  const [allLanguages, setAllLanguages] = useState([]);  // [{id, name}]
  const [allCategories, setAllCategories] = useState([]); // [{id, name}]

  // ─── UI state ────────────────────────────────────────────────────────────────
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [availabilityOpen, setAvailabilityOpen] = useState(true);
  const [featuredOpen, setFeaturedOpen] = useState(true);

  // ─── Cart & order ────────────────────────────────────────────────────────────
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    firstname: '', lastname: '', mobile: '', email: '', address: '', city: '', state: '', pincode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const debounceRef = useRef(null);

  // ─── Debounce search input ───────────────────────────────────────────────────
  const handleSearchInput = (val) => {
    setInputValue(val);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearch(val);
      setCurrentPage(1);
    }, 400);
  };

  const clearSearch = () => {
    setInputValue('');
    setSearch('');
    setCurrentPage(1);
  };

  // ─── Fetch books whenever filters / page change ──────────────────────────────
  useEffect(() => {
    const qs = buildQueryString({
      page: currentPage,
      search,
      languageIds: selectedLanguageIds,
      categoryIds: selectedCategoryIds,
      isAvailable: availabilityFilter,
    });
    setLoading(true);
    fetch(`${BOOKS_API}?${qs}`)
      .then(r => r.json())
      .then(data => {
        let books = data.books || [];
        // Featured filter is client-side only (no backend param)
        if (featuredFilter) books = books.filter(b => b.isFeatured || b.featured);
        // Sort featured first
        books.sort((a, b) => ((b.isFeatured || b.featured) ? 1 : 0) - ((a.isFeatured || a.featured) ? 1 : 0));
        setBooks(books);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalBooks(data.pagination?.total || 0);
        setLoading(false);
      })
      .catch(() => { setBooks([]); setLoading(false); });
  }, [currentPage, search, selectedLanguageIds, selectedCategoryIds, availabilityFilter, featuredFilter]);

  // ─── Fetch language & category lists once for sidebar ───────────────────────
  useEffect(() => {
    // Derive from first full fetch — grab a large page to seed filter options
    fetch(`${BOOKS_API}?page=1&limit=100`)
      .then(r => r.json())
      .then(data => {
        const books = data.books || [];
        const langMap = {};
        const catMap = {};
        books.forEach(b => {
          if (b.Language?.id) langMap[b.Language.id] = b.Language.name;
          if (b.Category?.id) catMap[b.Category.id] = b.Category.name;
        });
        setAllLanguages(Object.entries(langMap).map(([id, name]) => ({ id: Number(id), name })));
        setAllCategories(Object.entries(catMap).map(([id, name]) => ({ id: Number(id), name })));
      })
      .catch(() => { });
  }, []);

  // ─── Reset page to 1 when any filter changes ────────────────────────────────
  const applyFilter = (fn) => { fn(); setCurrentPage(1); };

  const toggleLanguage = (id) => applyFilter(() =>
    setSelectedLanguageIds(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id])
  );
  const toggleCategory = (id) => applyFilter(() =>
    setSelectedCategoryIds(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id])
  );

  const clearAllFilters = () => {
    setSearch('');
    setInputValue('');
    setSelectedLanguageIds([]);
    setSelectedCategoryIds([]);
    setAvailabilityFilter('all');
    setFeaturedFilter(false);
    setCurrentPage(1);
  };

  const activeFilterCount =
    selectedLanguageIds.length + selectedCategoryIds.length +
    (availabilityFilter !== 'all' ? 1 : 0) + (featuredFilter ? 1 : 0);
  const hasActiveFilters = activeFilterCount > 0 || search.length > 0;

  // ─── Pagination helpers ──────────────────────────────────────────────────────
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowPageDropdown(false);
    setPageSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginationNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      [1, 2, 3, 4, '...', totalPages].forEach(p => pages.push(p));
    } else if (currentPage >= totalPages - 2) {
      [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages].forEach(p => pages.push(p));
    } else {
      [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages].forEach(p => pages.push(p));
    }
    return pages;
  };

  const getFilteredPageNumbers = () => {
    const all = Array.from({ length: totalPages }, (_, i) => i + 1);
    return pageSearchTerm ? all.filter(p => p.toString().includes(pageSearchTerm)) : all;
  };

  // ─── Cart helpers ────────────────────────────────────────────────────────────
  const addToCart = (book) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === book.id);
      notification[existing ? 'info' : 'success']({
        message: existing
          ? (book.isAvailable ? 'Already in Cart' : 'Already in Wishlist')
          : (book.isAvailable ? 'Added to Cart' : 'Added to Wishlist'),
        placement: 'topRight', duration: 2,
      });
      return existing
        ? prev.map(i => i.id === book.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const cartTotal = cart.reduce((s, i) => s + (i.price || 0) * i.quantity, 0);
  const shippingCharge = cartTotal > 0 ? 100 : 0;

  const handleCheckout = async () => {
    if (!cart.length || !orderDetails.firstname || !orderDetails.mobile || !orderDetails.address)
      return alert('Please fill required fields!');
    setIsSubmitting(true);
    try {
      const res = await fetch(ORDERS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...orderDetails,
          books: cart.map(i => ({ bookId: i.id, quantity: i.quantity })),
          shippingDetails: `${orderDetails.address}, ${orderDetails.city}, ${orderDetails.state} - ${orderDetails.pincode}`
        })
      });
      const data = await res.json();
      setOrderSuccess(data.orderId || data.id || 'N/A');
      setCart([]);
      setOrderDetails({ firstname: '', lastname: '', mobile: '', email: '', address: '', city: '', state: '', pincode: '' });
      setShowCart(false);
    } catch { alert('Order failed!'); }
    finally { setIsSubmitting(false); }
  };

  // ─── Sidebar Filter Panel ────────────────────────────────────────────────────
  const FilterPanel = ({ className = '' }) => (
    <div className={`bg-white font-sans rounded-sm shadow-sm border border-gray-200 overflow-hidden ${className}`}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-amber-700 text-white">
        <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wide">
          <FaFilter size={12} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-white/30 text-xs px-1.5 py-0.5 rounded-full font-bold">{activeFilterCount}</span>
          )}
        </div>
        {hasActiveFilters && (
          <button onClick={clearAllFilters}
            className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors">
            Clear All
          </button>
        )}
      </div>

      {/* ── Featured ── */}
      <div className="border-b border-gray-100">
        <button onClick={() => setFeaturedOpen(o => !o)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
          <span className="flex items-center gap-1.5"><FaStar size={11} className="text-amber-500" /> Featured</span>
          {featuredOpen ? <FaChevronUp size={11} className="text-gray-400" /> : <FaChevronDown size={11} className="text-gray-400" />}
        </button>
        {featuredOpen && (
          <div className="px-4 pb-3">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" checked={featuredFilter}
                onChange={() => applyFilter(() => setFeaturedFilter(v => !v))}
                className="accent-amber-600 w-4 h-4 cursor-pointer" />
              <span className="text-xs text-gray-600 group-hover:text-amber-700 transition-colors">Show Featured Only</span>
            </label>
          </div>
        )}
      </div>

      {/* ── Availability ── */}
      <div className="border-b border-gray-100">
        <button onClick={() => setAvailabilityOpen(o => !o)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
          <span>Availability</span>
          {availabilityOpen ? <FaChevronUp size={11} className="text-gray-400" /> : <FaChevronDown size={11} className="text-gray-400" />}
        </button>
        {availabilityOpen && (
          <div className="px-4 pb-3 space-y-2">
            {[
              { value: 'all', label: 'All Books', dot: null },
              { value: 'available', label: 'Available', dot: 'bg-green-500' },
              { value: 'unavailable', label: 'Unavailable', dot: 'bg-red-400' },
            ].map(opt => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="availability" value={opt.value}
                  checked={availabilityFilter === opt.value}
                  onChange={() => applyFilter(() => setAvailabilityFilter(opt.value))}
                  className="accent-amber-600 w-4 h-4 cursor-pointer" />
                <span className="text-xs text-gray-600 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  {opt.dot && <span className={`w-2 h-2 rounded-full inline-block ${opt.dot}`}></span>}
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ── Language ── */}
      {allLanguages.length > 0 && (
        <div className="border-b border-gray-100">
          <button onClick={() => setLanguageOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <span>भाषा (Language)</span>
            {languageOpen ? <FaChevronUp size={11} className="text-gray-400" /> : <FaChevronDown size={11} className="text-gray-400" />}
          </button>
          {languageOpen && (
            <div className="px-4 pb-3 space-y-2">
              {allLanguages.map(lang => (
                <label key={lang.id} className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" checked={selectedLanguageIds.includes(lang.id)}
                    onChange={() => toggleLanguage(lang.id)}
                    className="accent-amber-600 w-4 h-4 cursor-pointer" />
                  <span className="text-xs text-gray-600 group-hover:text-amber-700 transition-colors">{lang.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Category ── */}
      {allCategories.length > 0 && (
        <div>
          <button onClick={() => setCategoryOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <span>श्रेणी (Category)</span>
            {categoryOpen ? <FaChevronUp size={11} className="text-gray-400" /> : <FaChevronDown size={11} className="text-gray-400" />}
          </button>
          {categoryOpen && (
            <div className="px-4 pb-3 space-y-2">
              {allCategories.map(cat => (
                <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" checked={selectedCategoryIds.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                    className="accent-amber-600 w-4 h-4 cursor-pointer" />
                  <span className="text-xs text-gray-600 group-hover:text-amber-700 transition-colors leading-tight">{cat.name}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  // ─── Loading skeleton ────────────────────────────────────────────────────────
  if (loading && currentPage === 1 && !hasActiveFilters) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  // ════════════════════════════════════════════════════════════════════════════
  return (
    <div style={{ width: '100vw' }} className="min-h-screen font-heading bg-gray-50">

      {/* ── HEADER ── */}
      <div className="relative bg-cover bg-center font-sans py-4 sm:py-4 px-4"
        style={{ backgroundImage: "url('booklistheader.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

        {/* Cart button */}
        {!showCart && (
          <button onClick={() => setShowCart(true)}
            className="absolute top-4 right-4 sm:top-6 sm:right-8 z-20 text-white px-4 py-3 rounded-sm shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 font-semibold">
            <FaShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>
        )}

        <div className="relative z-10 w-full px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-white my-2 text-center drop-shadow-2xl">
            {showCart ? 'Your Shopping Cart' : 'AGT Books'}
          </h1>

          {/* {!showCart && (
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search books by title or author..."
                  className="w-full pl-14 pr-10 py-4 rounded-sm bg-white/95 backdrop-blur outline-none focus:ring-4 focus:ring-amber-400 shadow-2xl"
                  value={inputValue}
                  onChange={e => handleSearchInput(e.target.value)}
                />
                {inputValue && (
                  <button onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <FaTimes size={16} />
                  </button>
                )}
              </div>
            </div>
          )} */}
        </div>
      </div>

      {/* ════════════════ MAIN CONTENT ════════════════ */}
      {!showCart ? (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-4">
            <button onClick={() => setShowMobileFilters(o => !o)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50">
              <FaFilter size={13} />
              {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
              {activeFilterCount > 0 && (
                <span className="ml-1 bg-amber-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{activeFilterCount}</span>
              )}
            </button>
            {showMobileFilters && <div className="mt-3"><FilterPanel /></div>}
          </div>

          <div className="flex gap-6">

            {/* Sidebar – desktop */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-4"><FilterPanel /></div>
            </aside>

            {/* Books area */}
            <div className="flex-1 min-w-0">

              {/* Search bar above grid */}
              <div className="mb-4">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input
                    type="text"
                    placeholder="Search books by title or author..."
                    className="w-full pl-10 pr-10 py-2.5 font-sans text-sm border border-gray-300 rounded bg-white outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 shadow-sm"
                    value={inputValue}
                    onChange={e => handleSearchInput(e.target.value)}
                  />
                  {inputValue && (
                    <button onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <FaTimes size={13} />
                    </button>
                  )}
                </div>
              </div>

              {/* Active filter chips */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {search && (
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">
                      Search: "{search}"
                      <button onClick={clearSearch} className="ml-1 hover:text-amber-900"><FaTimes size={10} /></button>
                    </span>
                  )}
                  {featuredFilter && (
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">
                      <FaStar size={10} /> Featured Only
                      <button onClick={() => applyFilter(() => setFeaturedFilter(false))} className="ml-1 hover:text-amber-900"><FaTimes size={10} /></button>
                    </span>
                  )}
                  {availabilityFilter !== 'all' && (
                    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">
                      <span className={`w-2 h-2 rounded-full inline-block ${availabilityFilter === 'available' ? 'bg-green-500' : 'bg-red-400'}`}></span>
                      {availabilityFilter === 'available' ? 'Available' : 'Unavailable'}
                      <button onClick={() => applyFilter(() => setAvailabilityFilter('all'))} className="ml-1 hover:text-amber-900"><FaTimes size={10} /></button>
                    </span>
                  )}
                  {selectedLanguageIds.map(id => {
                    const lang = allLanguages.find(l => l.id === id);
                    return lang ? (
                      <span key={id} className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">
                        {lang.name}
                        <button onClick={() => toggleLanguage(id)} className="ml-1 hover:text-amber-900"><FaTimes size={10} /></button>
                      </span>
                    ) : null;
                  })}
                  {selectedCategoryIds.map(id => {
                    const cat = allCategories.find(c => c.id === id);
                    return cat ? (
                      <span key={id} className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">
                        {cat.name}
                        <button onClick={() => toggleCategory(id)} className="ml-1 hover:text-amber-900"><FaTimes size={10} /></button>
                      </span>
                    ) : null;
                  })}
                </div>
              )}

              {/* Result count */}
              <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
                <p className="text-sm text-gray-600">
                  {loading ? 'Loading...' : (
                    <>
                      Showing <span className="font-semibold text-gray-800">
                        {((currentPage - 1) * LIMIT) + 1}–{Math.min(currentPage * LIMIT, totalBooks)}
                      </span> of <span className="font-semibold text-gray-800">{totalBooks}</span> results
                      {hasActiveFilters && <span className="ml-1 text-amber-700 font-semibold">(filtered)</span>}
                    </>
                  )}
                </p>
              </div>

              {/* Book grid */}
              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[...Array(LIMIT)].map((_, i) => (
                    <div key={i} className="bg-white rounded-sm shadow-sm border animate-pulse">
                      <div className="aspect-[3/4] bg-gray-200"></div>
                      <div className="p-4 space-y-2">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : books.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {books.map(book => {
                      const isFeatured = book.isFeatured || book.featured;
                      const isInCart = cart.some(i => i.id === book.id);
                      return (
                        <div key={book.id} onClick={() => setSelectedBook(book)}
                          className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-all cursor-pointer overflow-hidden border border-gray-200 relative">

                          {/* Featured ribbon */}
                          {isFeatured && (
                            <div className="absolute top-0 right-0 z-10 w-24 h-24 overflow-hidden pointer-events-none">
                              <div className="absolute font-sans top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-10 py-1 transform rotate-45 translate-x-8 translate-y-2 shadow-md">
                                Featured
                              </div>
                            </div>
                          )}

                          {/* Availability badge */}
                          <div className={`absolute top-2 left-2 z-10 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${book.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                            {book.isAvailable ? 'Available' : 'Unavailable'}
                          </div>

                          <div className="relative aspect-[3/4] bg-gray-100">
                            <img src={book.frontImage} alt={book.name || book.title}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              onError={e => { e.target.src = book.image || '/book-placeholder.webp'; }} />
                          </div>

                          <div className="p-3">
                            <div className="h-24">
                              <div className="text-xs text-gray-500 uppercase mb-1">{book.Category?.name || book.shreni || ''}</div>
                              <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                                <a href="#" onClick={e => e.preventDefault()} className="text-blue-600 hover:underline hover:text-blue-800">
                                  {book.name || book.title}
                                </a>
                              </h3>
                              <div className="space-y-1 text-xs text-gray-600 mb-3">
                                <div className="flex justify-between">
                                  <span>भाषा:</span>
                                  <span className="font-medium">{book.Language?.name}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>आवृत्ति:</span>
                                  <span className="font-medium">{book.edition}</span>
                                </div>
                              </div>
                            </div>
                            <button onClick={e => { e.stopPropagation(); addToCart(book); }}
                              className={`w-full text-white px-3 py-2 rounded text-sm font-semibold active:scale-95 transition-transform font-sans
                                ${isInCart ? '!bg-green-600 hover:!bg-green-700' : isFeatured && !book.isAvailable ? 'bg-amber-700 hover:bg-amber-800' : 'bg-amber-600 hover:bg-amber-700'}`}>
                              {isInCart
                                ? <><FaCheckCircle className="inline mr-1" size={12} /> {book.isAvailable ? 'Added to Cart' : 'Waitlist Joined'}</>
                                : <><FaPlus className="inline mr-1" size={12} /> {book.isAvailable ? 'Add to Cart' : 'Join Waitlist'}</>
                              }
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        {currentPage > 1 && (
                          <button onClick={() => handlePageChange(currentPage - 1)}
                            className="px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">←</button>
                        )}
                        {getPaginationNumbers().map((page, idx) =>
                          page === '...'
                            ? <span key={`e${idx}`} className="px-3 py-2 text-gray-500">...</span>
                            : <button key={page} onClick={() => handlePageChange(page)}
                              className={`min-w-[40px] px-3 py-2 text-sm rounded font-medium transition-colors
                                  ${currentPage === page ? 'bg-red-800 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                              {page}
                            </button>
                        )}
                        {currentPage < totalPages && (
                          <button onClick={() => handlePageChange(currentPage + 1)}
                            className="px-3 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">→</button>
                        )}
                      </div>

                      {/* Go-to-page dropdown */}
                      <div className="relative">
                        <button onClick={() => setShowPageDropdown(v => !v)}
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
                                  value={pageSearchTerm} onChange={e => setPageSearchTerm(e.target.value)}
                                  className="w-full px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                                  onClick={e => e.stopPropagation()} />
                              </div>
                              <div className="max-h-64 overflow-y-auto">
                                {getFilteredPageNumbers().map(page => (
                                  <button key={page} onClick={() => handlePageChange(page)}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${currentPage === page ? 'bg-red-50 text-red-800 font-semibold' : 'text-gray-700'}`}>
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
                  {hasActiveFilters && (
                    <button onClick={clearAllFilters} className="mt-3 text-amber-700 font-semibold underline text-sm">
                      Clear all filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

      ) : (
        /* ════════════════ CART VIEW ════════════════ */
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <button onClick={() => setShowCart(false)}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-amber-700 font-semibold">
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
              {/* Cart items + summary */}
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="bg-white rounded-lg p-4 shadow border border-gray-200 flex gap-4">
                    <img src={item.frontImage} className="w-20 h-28 object-cover rounded flex-shrink-0" alt={item.title || item.name} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title || item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">{item.Language?.name} • {item.edition}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-700">₹{(item.price || 0) * item.quantity}</span>
                        <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-white rounded-lg p-6 shadow border border-gray-200">
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

              {/* Shipping form */}
              <div className="bg-white font-sans rounded-lg p-6 shadow border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Shipping Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[['firstname', 'First Name *'], ['lastname', 'Last Name *']].map(([key, label]) => (
                      <div key={key}>
                        <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">{label}</label>
                        <input value={orderDetails[key]}
                          onChange={e => setOrderDetails({ ...orderDetails, [key]: e.target.value })}
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                      </div>
                    ))}
                  </div>
                  {[['mobile', 'Mobile *'], ['email', 'Email']].map(([key, label]) => (
                    <div key={key}>
                      <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">{label}</label>
                      <input value={orderDetails[key]}
                        onChange={e => setOrderDetails({ ...orderDetails, [key]: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">Address *</label>
                    <textarea value={orderDetails.address}
                      onChange={e => setOrderDetails({ ...orderDetails, address: e.target.value })}
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none h-24 resize-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[['city', 'City *'], ['pincode', 'Pincode *']].map(([key, label]) => (
                      <div key={key}>
                        <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">{label}</label>
                        <input value={orderDetails[key]}
                          onChange={e => setOrderDetails({ ...orderDetails, [key]: e.target.value })}
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase mb-1 block">State *</label>
                    <select value={orderDetails.state}
                      onChange={e => setOrderDetails({ ...orderDetails, state: e.target.value })}
                      className="w-full font-heading bg-gray-50 border-2 border-gray-200 focus:border-amber-500 p-3 rounded outline-none">
                      <option value="">Select State</option>
                      {states.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </div>
                  <button onClick={handleCheckout} disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all mt-6">
                    {isSubmitting
                      ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                      : <><FaShoppingBag size={18} /> Place Order</>
                    }
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Book Detail Modal ── */}
      {selectedBook && (
        <BookDetailModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onAddToCart={(book) => { addToCart(book); setSelectedBook(null); }}
          onOrderNow={(book) => { addToCart(book); setSelectedBook(null); setShowCart(true); }}
        />
      )}

      {/* ── Order Success Modal ── */}
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