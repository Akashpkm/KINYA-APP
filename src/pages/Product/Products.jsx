import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';


const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentTheme, setCurrentTheme] = useState('light');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

  // Detect theme changes
  useEffect(() => {
    const detectTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'light';
      setCurrentTheme(theme);
    };

    detectTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          detectTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Updated product data with more details
  const productCategories = [
    {
      id: 'vitrectomy',
      title: 'VITRECTOMY&PHACO ',
      icon: '🔬',
      products: [
        { 
          id: 'posterior', 
          name: 'POSTERIOR VITRECTOMY SYSTEM & PHACO', 
          image: './images/POSTERIOR.png', 
          description: 'Advanced Posterior Vitrectomy System with Precision Cutting Technology.',
          features: ['10000 Cuts Per Min', 'Fast Vacuum Rise', 'Enhanced Visualization of Retinal','Advanced Fluidics','Multi Functional Foot Pedal']
        },
        { 
          id: 'phaco', 
          name: 'PHACO EMULSIFICATION', 
          image: './images/PHACO1.png', 
          description: 'Advanced Phacoemulsification and Anterior Vitrectomy ',
          features: ['Advanced Fluidics ', 'High Cutting Efficiency', 'Enhanced Safety']
        },
        { 
          id: 'ant-vit', 
          name: 'ANT_VIT VITRECTOMY ', 
          image: './images/ANTERIOR.png', 
          description: 'Compact anterior vitrectomy system for delicate procedures.',
          features: ['Compact Size', 'Precision Control', 'Easy Handling']
        },
        { 
          id: 'air-injection', 
          name: 'AIR INJECTION MODULE', 
          image: './images/AIR-INJ.png', 
          description: 'Precise air pressure control module for vitreoretinal surgery.',
          features: ['Precise Control', 'Safety Lock', 'Digital Display']
        },
        { 
          id: 'light-source', 
          name: 'LIGHT SOURCE', 
          image: './images/LIGHTSOURCE.png', 
          description: 'High-intensity LED illumination system for optimal visualization.',
          features: ['LED Technology', 'Adjustable Intensity', 'Cool Operation']
        }
      ]
    },
    {
      id: 'diagnostic',
      title: 'DIAGNOSTIC A/B/P SCAN',
      icon: '📊',
      products: [
        { 
          id: 'abp-scan', 
          name: 'A/B/P SCAN', 
          image: './images/ABP_SCAN.png', 
          description: 'Complete diagnostic system with A-scan, B-scan, and P-scan capabilities.',
          features: ['Multi-Function', 'High Resolution', 'User-Friendly']
        }
      ]
    },
    {
      id: 'sterilizer',
      title: 'STERILIZER',
      icon: '⚡',
      products: [
        { 
          id: 'autoclave', 
          name: 'AUTOCLAVE', 
          image: './images/AUTOCLAVE.png', 
          description: 'High-pressure autoclave for thorough sterilization.',
          features: ['High Pressure', 'Fast Cycle', 'Safety Certified']
        },
        { 
          id: 'plasma', 
          name: 'PLASMA', 
          image: './images/PLASMA.png', 
          description: 'Low-temperature plasma sterilization technology.',
          features: ['Low Temperature', 'Plasma Tech', 'Gentle Sterilization']
        },
        { 
          id: 'eto', 
          name: 'ETO STERILIZER', 
          image: './images/ETO.png', 
          description: 'Ethylene oxide sterilization for sensitive equipment.',
          features: ['Gas Sterilization', 'Sensitive Materials', 'Thorough Penetration']
        }
      ]
    }
  ];

  const handleViewMore = (productId) => {
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  };

  const filteredCategories = activeCategory === 'all' 
    ? productCategories 
    : productCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="products-page" data-theme={currentTheme}>
      <div className="container">
        {/* Hero Section */}
        <div className="products-hero">
          <h1 className="page-title">KINYA PRODUCTS</h1>
          <p className="page-subtitle">Discover our range of high-quality medical equipment and supplies</p>
          <div className="hero-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-circle"></div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="category-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span className="btn-icon">⭐</span>
            All Products
          </button>
          {productCategories.map(category => (
            <button 
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="btn-icon">{category.icon}</span>
              {category.title.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>

        {/* Product Categories */}
        <div className="products-content">
          {filteredCategories.map(category => (
            <div key={category.id} className="product-category">
              <div className="category-header">
                <h2 className="category-title">
                  <span className="category-icon">{category.icon}</span>
                  {category.title}
                </h2>
                <div className="category-line"></div>
              </div>
              
              <div className="product-grid">
                {category.products.map(product => (
                  <div 
                    key={product.id} 
                    className={`product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="product-image-container">
                      <div className="image-wrapper">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="product-image"
                          onError={(e) => {
                            e.target.src = '/images/placeholder-product.jpg';
                            e.target.alt = 'Product Image Not Available';
                          }}
                        />
                        <div className="image-overlay"></div>
                      </div>
                      <div className="product-features">
                        {product.features.map((feature, index) => (
                          <span key={index} className="feature-tag">{feature}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="product-content">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      
                      <button 
                        onClick={() => handleViewMore(product.id)}
                        className="view-more-btn"
                      >
                        <span>View Details</span>
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;