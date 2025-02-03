import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import logo from './assets/Logo.png';
import footerLogo from './assets/footerlogo.png';
import hero from './assets/hero.png';
import shopeeIcon from './assets/Shopee Logo.png';
import model2 from './assets/Model 2.jpg';
import model3 from './assets/Model 3.jpg';
import model4 from './assets/Model 4.png';
import groupProducts1 from './assets/Group Products 1.png';
import groupProducts2 from './assets/Group Products 2.png';
import product0 from './assets/Product0.png';
import product1 from './assets/Product1.png';
import product2 from './assets/Product2.png';
import facebookIcon from './assets/facebook-svgrepo-com.svg';
import instagramIcon from './assets/instagram-svgrepo-com.svg';

// Product categories and data
const categories = ['Brightening', 'Anti-Acne', 'Anti-Aging'];

const products = [
  {
    id: 1,
    name: 'Anti-Acne Serum',
    description: 'A product formulated to give you clearer skin and prevents it from breaking out.',
    price: 800,
    image: product0,
    category: 'Anti-Acne'
  },
  {
    id: 2,
    name: 'Anti-Acne Wash Foam',
    description: 'A product formulated to give you clearer skin and prevents it from breaking out.',
    price: 1000,
    image: product1,
    category: 'Anti-Acne'
  },
  {
    id: 3,
    name: 'Anti-Acne Toner',
    description: 'A product formulated to give you clearer skin and prevents it from breaking out.',
    price: 650,
    image: product2,
    category: 'Anti-Acne'
  },
  {
    id: 4,
    name: 'Anti-Acne Cream',
    description: 'A product formulated to give you clearer skin and prevents it from breaking out.',
    price: 500,
    image: product0,
    category: 'Anti-Acne'
  },
  {
    id: 5,
    name: 'Anti-Acne Serum',
    description: 'A product formulated to give you clearer skin and prevents it from breaking out.',
    price: 800,
    image: product1,
    category: 'Anti-Acne'
  },
  {
    id: 6,
    name: 'Anti-Acne Wash Foam',
    description: 'A product formulated to give you clearer skin and prevents it from breaking out.',
    price: 1000,
    image: product2,
    category: 'Anti-Acne'
  }
];

const knowMoreCategories = [
  {
    title: 'ANTI-ACNE',
    image: 'https://images.unsplash.com/photo-1595237766067-070ff46be610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    title: 'BRIGHTENING',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    title: 'ANTI-AGING',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState('Anti-Acne');
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-gray-900 hover:text-gray-700 z-50 relative"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12 pl-8">
              {['Home', 'About us', 'Services', 'Contact us'].map((item) => (
                <button
                  key={item}
                  className={`text-base ${
                    activeLink === item
                      ? 'text-black border-b-2 border-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setActiveLink(item)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40">
              {/* Close Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-gray-300 p-2"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col h-screen justify-center items-center bg-slate-600">
                {/* Logo in Mobile Menu */}
                <div className="mb-16">
                  <img 
                    src={footerLogo}
                    alt="Tori Skin"
                    className="h-16 object-contain"
                  />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center space-y-8 ">
                  {['Home', 'About us', 'Services', 'Contact us'].map((item) => (
                    <button
                      key={item}
                      className={`relative text-2xl font-light tracking-wider ${
                        activeLink === item
                          ? 'text-white after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-gray-800'
                          : 'text-gray-400 hover:text-white transition-colors duration-200'
                      }`}
                      onClick={() => {
                        setActiveLink(item);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="relative min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
              {/* Left Content */}
              <div className="space-y-8 md:space-y-10 max-w-2xl px-4 md:pl-8 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-light leading-tight">
                  Your Skin Matters
                </h2>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-gray-600 font-light">
                    Formulated for perfection.
                  </p>
                  <p className="text-xl md:text-2xl text-gray-600 font-light">
                    Your skin's partner for a better you.
                  </p>
                </div>
                <div className="pt-6">
                  <img 
                    src={logo}
                    alt="Tori Skin" 
                    className="h-[200px] md:h-[400px] object-contain mx-auto md:mx-0"
                  />
                </div>
              </div>

              {/* Right Image - Now visible on mobile */}
              <div className="block relative w-full md:w-[740px] h-[400px] md:h-[700px]">
                <img
                  src={hero}
                  alt="Beautiful skin"
                  className="absolute inset-0 w-full h-full object-cover object-[center_right] rounded-lg md:rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Products Section */}
      <div className="py-12 md:py-24 bg-gray-200 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-wider">
              — PRODUCTS —
            </h2>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 md:space-x-16 mb-8 md:mb-16">
            {['Brightening', 'Anti-Acne', 'Anti-Aging'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-lg font-light ${
                  activeCategory === category
                    ? 'text-black border-b border-blue-400'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products
              .filter((product) => product.category === activeCategory)
              .map((product) => (
                <div key={product.id} className="relative">
                  {/* Gray Background with Rounded Top Corners */}
                  <div className="bg-[#F5F5F5] rounded-[20px] rounded-b-none pt-12 pb-20 px-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] object-contain mx-auto"
                    />
                  </div>
                  {/* White Card with Product Details */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-[50px] rounded-b-none shadow-sm p-6">
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">
                      A product formulated to give you clearer skin and prevents it from breaking out.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-lg font-medium">₱ {product.price}</span>
                      </div>
                      <button className="bg-white">
                        <img 
                          src={shopeeIcon}
                          alt="Shopee" 
                          className="w-6 h-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Product Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Top Row */}
          <div className="relative">
            <img 
              src={model2}
              alt="Skincare model"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center  bg-white">
            <h3 className="text-2xl font-medium mb-4">Your skin's partner for a better you.</h3>
            <p className="text-gray-600">
              Formulated with key ingredients to help you achieve the perfect look. The real transformation starts here. Discover how to grow with a healthy-looking complexion.
            </p>
          </div>

          {/* Middle Row */}
          <div className="flex flex-col justify-center  bg-white">
            <h3 className="text-xl font-medium mb-4">The Anti-Acne Skincare system is specially formulated to treat imperfections and acne.</h3>
            <p className="text-gray-600">
              It is a dual-phase system that reduces and prevents pimples, blackheads, and other skin blemishes while providing essential nutrients to maintain healthy complexion.
            </p>
          </div>
          <div className="relative items-center justify-center">
            <img 
              src={groupProducts1}
              alt="Product collection"
               className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Bottom Row */}
          <div className="relative  items-center justify-center">
            <img 
               src={groupProducts2}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-white">
            <h3 className="text-xl font-medium mb-4">This reveals your radiant skin by helping treat the problem of problematic skin.</h3>
            <p className="text-gray-600">
              A combination of natural extracts will visibly lighten and brighten uneven skin tones, acne scars, age spots, and pigmentation.
            </p>
          </div>
        </div>
      </div>

      {/* Know More Section */}
      <div className="relative py-12 md:py-24">
        {/* Split Background */}
        <div className="absolute inset-0">
          <div className="h-1/2 bg-black" />
          <div className="h-1/2 bg-white" />
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title with lines */}
            <div className="flex items-center justify-center mb-20">
              <div className="w-20 h-[1px] bg-white"></div>
              <h2 className="text-4xl font-light tracking-wider text-white px-4">
                KNOW MORE
              </h2>
              <div className="w-20 h-[1px] bg-white"></div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'ANTI-ACNE',
                  image: model2
                },
                {
                  title: 'BRIGHTENING',
                  image: model3
                },
                {
                  title: 'ANTI-AGING',
                  image: model4
                }
              ].map((category, index) => (
                <div key={index} className="space-y-4">
                  {/* Image Card */}
                  <div className="rounded-[20px] overflow-hidden shadow-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  {/* Text Below Image */}
                  <div className="text-center">
                    <h3 className="text-[40px] font-playfair mb-1">{category.title}</h3>
                    <p className="text-gray-500 text-[16px] font-light">Read</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Logo and Social Icons */}
            <div className="flex flex-col items-center md:w-[400px]">
              <img 
                src={footerLogo}
                alt="Tori Skin" 
                className="h-24 object-contain mb-6"
              />
              <div className="flex justify-center space-x-6">
                <a href="#" className="hover:opacity-80">
                  <img 
                    src={facebookIcon}
                    alt="Facebook" 
                    className="w-8 h-8 invert brightness-0"
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <img 
                    src={instagramIcon}
                    alt="Instagram" 
                    className="w-8 h-8 invert brightness-0"
                  />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:flex md:space-x-24 gap-8">
              {/* Navigation columns with mobile layout */}
              <div className="w-full md:w-32">
                <h4 className="text-xl md:text-2xl font-light mb-4 md:mb-6 text-center md:text-right">
                  Home
                </h4>
                <ul className="space-y-2 md:space-y-3 text-sm text-center md:text-right">
                  <li><a href="#" className="hover:opacity-80">About Us</a></li>
                  <li><a href="#" className="hover:opacity-80">Products</a></li>
                  <li><a href="#" className="hover:opacity-80">Distributors</a></li>
                  <li><a href="#" className="hover:opacity-80">Packages</a></li>
                </ul>
              </div>
              <div className="w-full md:w-32">
                <h4 className="text-xl md:text-2xl font-light mb-4 md:mb-6 text-center md:text-right">
                  About Us
                </h4>
                <ul className="space-y-2 md:space-y-3 text-sm text-center md:text-right">
                  <li><a href="#" className="hover:opacity-80">About Us</a></li>
                  <li><a href="#" className="hover:opacity-80">Get Started</a></li>
                  <li><a href="#" className="hover:opacity-80">Media</a></li>
                  <li><a href="#" className="hover:opacity-80">Gallery</a></li>
                </ul>
              </div>
              <div className="w-full md:w-32">
                <h4 className="text-xl md:text-2xl font-light mb-4 md:mb-6 text-center md:text-right">
                  Products
                </h4>
                <ul className="space-y-2 md:space-y-3 text-sm text-center md:text-right">
                  <li><a href="#" className="hover:opacity-80">Product Line</a></li>
                  <li><a href="#" className="hover:opacity-80">Anti-Acne</a></li>
                  <li><a href="#" className="hover:opacity-80">Brightening</a></li>
                  <li><a href="#" className="hover:opacity-80">Whitening</a></li>
                </ul>
              </div>
              <div className="w-full md:w-40">
                <h4 className="text-xl md:text-2xl font-light mb-4 md:mb-6 text-center md:text-right">
                  Contact Us
                </h4>
                <ul className="space-y-2 md:space-y-3 text-sm text-center md:text-right">
                  <li>(000) 123-1234</li>
                  <li>
                    <a href="mailto:customercare@toriskin.com" className="hover:opacity-80">
                      customercare@toriskin.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-12 md:mt-16 pt-8 border-t border-gray-800">
            <p className="text-sm">COPYRIGHT © 2022 | Tori Skin</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;