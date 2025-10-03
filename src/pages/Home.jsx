import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import backgroundVideo from "./images/vi.mp4";

function Home() {
  const statsRef = useRef(null);
  const chatBoxRef = useRef(null);
  const messagesEndRef = useRef(null);
  const testimonialsRef = useRef(null);
  const testimonialsTrackRef = useRef(null);
  const [theme, setTheme] = useState('light');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // AI Responses database
  const aiResponses = {
    greetings: [
      "Hello! I'm Kinya Medical AI assistant. How can I help you today?",
      "Hi there! Welcome to Kinya Medical. What can I assist you with?",
      "Greetings! I'm here to help you with any questions about our medical solutions."
    ],
    products: [
      "We offer a wide range of medical equipment including surgical instruments, diagnostic machines, patient monitoring systems, and pharmaceutical supplies. All our products meet international quality standards.",
      "Our product portfolio includes state-of-the-art medical devices, surgical equipment, and healthcare solutions tailored for Kenyan healthcare facilities.",
      "We provide everything from basic medical supplies to advanced surgical equipment. Would you like to know about specific categories?"
    ],
    support: [
      "You can contact our support team 24/7 at +254-700-000-000 or email support@kinyamedical.com. We're always here to help!",
      "For technical support, call our dedicated helpline at +254-700-000-000. Our certified professionals are available round the clock.",
      "Support is just a call away! Reach us at +254-700-000-000 for immediate assistance with any equipment or service issues."
    ],
    training: [
      "Yes! We provide comprehensive training programs for medical staff on equipment operation, maintenance, and best practices.",
      "We offer both on-site and virtual training sessions conducted by certified medical professionals. Training is included with most equipment purchases.",
      "Our training programs are designed to ensure your team can maximize the benefits of our medical equipment effectively and safely."
    ],
    areas: [
      "We serve all regions across Kenya including Nairobi, Mombasa, Kisumu, Nakuru, and remote areas through our nationwide delivery network.",
      "Kinya Medical operates throughout Kenya with distribution centers in major cities and reliable delivery to even the most remote healthcare facilities.",
      "Our services cover the entire Kenyan territory. We have partnerships with logistics providers to ensure timely delivery everywhere."
    ],
    pricing: [
      "Pricing varies based on equipment specifications and quantity. Please contact our sales team for a customized quote based on your requirements.",
      "We offer competitive pricing and flexible payment options. Let me connect you with our sales team for detailed pricing information.",
      "For accurate pricing and available discounts, our sales representatives can provide you with a comprehensive quote. Would you like me to have them contact you?"
    ],
    delivery: [
      "Standard delivery takes 3-5 business days within major cities and 5-10 days for remote areas. Emergency deliveries are available.",
      "We ensure timely delivery across Kenya through our reliable logistics partners. Delivery time depends on your location and product availability.",
      "Most orders are delivered within a week. We also offer express delivery options for urgent requirements."
    ],
    warranty: [
      "All our equipment comes with manufacturer warranty ranging from 1-5 years depending on the product. We also offer extended service contracts.",
      "We provide comprehensive warranty coverage and after-sales support. Specific warranty terms vary by product category.",
      "Our products are backed by solid warranty policies and we have a dedicated service team for maintenance and repairs."
    ],
    default: [
      "Thank you for your interest in Kinya Medical. Our team will get back to you shortly with more detailed information.",
      "I understand you're looking for information. Let me connect you with our specialist who can provide more specific details.",
      "That's a great question! Our customer service team can give you the most accurate information. Would you like me to have them contact you?"
    ]
  };

  // Detect theme change from navbar
  useEffect(() => {
    const detectTheme = () => {
      const body = document.body;
      if (body.classList.contains('dark-theme')) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    detectTheme();

    const observer = new MutationObserver(detectTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Improved Testimonials auto-scroll with seamless loop
  useEffect(() => {
    if (testimonialsTrackRef.current) {
      const track = testimonialsTrackRef.current;
      const container = testimonialsRef.current;
      
      // Duplicate testimonials for seamless loop
      const testimonials = Array.from(track.children);
      testimonials.forEach(testimonial => {
        const clone = testimonial.cloneNode(true);
        track.appendChild(clone);
      });

      const scrollTestimonials = () => {
        if (container) {
          const scrollLeft = container.scrollLeft;
          const scrollWidth = track.scrollWidth / 2; // Since we duplicated
          
          if (scrollLeft >= scrollWidth) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 1;
          }
        }
      };

      const scrollInterval = setInterval(scrollTestimonials, 30); // Faster speed
      return () => clearInterval(scrollInterval);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Get AI response based on user message
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('product') || message.includes('equipment') || message.includes('device')) {
      return aiResponses.products[Math.floor(Math.random() * aiResponses.products.length)];
    } else if (message.includes('support') || message.includes('contact') || message.includes('help')) {
      return aiResponses.support[Math.floor(Math.random() * aiResponses.support.length)];
    } else if (message.includes('train') || message.includes('learn') || message.includes('educate')) {
      return aiResponses.training[Math.floor(Math.random() * aiResponses.training.length)];
    } else if (message.includes('area') || message.includes('location') || message.includes('serve') || message.includes('where')) {
      return aiResponses.areas[Math.floor(Math.random() * aiResponses.areas.length)];
    } else if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return aiResponses.pricing[Math.floor(Math.random() * aiResponses.pricing.length)];
    } else if (message.includes('delivery') || message.includes('shipping') || message.includes('time')) {
      return aiResponses.delivery[Math.floor(Math.random() * aiResponses.delivery.length)];
    } else if (message.includes('warranty') || message.includes('guarantee') || message.includes('service')) {
      return aiResponses.warranty[Math.floor(Math.random() * aiResponses.warranty.length)];
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    } else {
      return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
    }
  };

  // Handle sending messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response after delay
    setTimeout(() => {
      const aiResponse = {
        text: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Quick responses
  const quickResponses = [
    "Tell me about your products",
    "How can I contact support?",
    "Do you offer training?",
    "What areas do you serve?",
    "What's your delivery time?",
    "Do you provide warranty?"
  ];

  const handleQuickResponse = (response) => {
    setInputMessage(response);
    // Auto-send the quick response
    setTimeout(() => {
      const userMessage = {
        text: response,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      setIsTyping(true);

      setTimeout(() => {
        const aiResponse = {
          text: getAIResponse(response),
          sender: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1500);
    }, 100);
  };

  // WhatsApp button handler
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/c/918056805837', '_blank', 'noopener,noreferrer');
  };

  // Stats counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat) => {
              const target = parseInt(stat.getAttribute('data-target'));
              const duration = 2000;
              const steps = 60;
              const stepValue = target / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                  stat.textContent = target;
                  clearInterval(timer);
                } else {
                  stat.textContent = Math.floor(current);
                }
              }, duration / steps);
            });
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`home ${theme}-theme`} id="home">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>Trusted Healthcare Solutions</span>
              </div>
              <h1 className="hero-title">
                 <span className="title-line accent">KINYA</span>
                <span className="title-line">Key Innovation in</span>
                <span className="title-line">Your Access</span>
              </h1>
              <p className="hero-subtitle">
                Providing cutting-edge medical solutions, equipment, and pharmaceuticals 
                to healthcare facilities across Kenya with excellence and reliability.
              </p>
              <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">
                  <span>Explore Products</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a href="tel:+254700000000" className="btn btn-secondary">
                  <span>Call Now</span>
                  <i className="fas fa-phone"></i>
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">24+</span>
                  <span className="stat-label">Years of Experties</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Healthcare Partners</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3000+</span>
                  <span className="stat-label">No of Surgeries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to Explore</div>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Kinya Medical?</h2>
            <p className="section-subtitle">
              Excellence in healthcare delivery through innovation, quality, and dedicated support
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: 'fas fa-award',
                title: 'Quality Certified',
                description: 'All products meet international quality standards with proper certifications and compliance.',
                color: '#4CAF50'
              },
              {
                icon: 'fas fa-truck-fast',
                title: 'Nationwide Delivery',
                description: 'Efficient logistics network ensuring timely delivery across all regions in Kenya.',
                color: '#2196F3'
              },
              {
                icon: 'fas fa-user-md',
                title: 'Expert Support',
                description: 'Certified medical professionals providing technical support and comprehensive training.',
                color: '#FF9800'
              },
              {
                icon: 'fas fa-headset',
                title: '24/7 Service',
                description: 'Round-the-clock customer support for emergencies and urgent equipment needs.',
                color: '#9C27B0'
              },
              {
                icon: 'fas fa-shield-heart',
                title: 'Patient Safety',
                description: 'Equipment designed with patient safety and healthcare efficiency as top priorities.',
                color: '#E91E63'
              },
              {
                icon: 'fas fa-handshake',
                title: 'Partnership',
                description: 'Long-term partnerships with healthcare facilities for continuous improvement.',
                color: '#673AB7'
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ color: feature.color }}>
                  <i className={`${feature.icon} fa-3x`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-hover" style={{ background: feature.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '24', label: 'Years of Experties', suffix: '+' },
              { number: '250', label: 'Healthcare Partners', suffix: '+' },
              { number: '170', label: 'Products Delivered', suffix: '+' },
              { number: '3000', label: 'No of surgeries', suffix: '+' }
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-content">
                  <div className="stat-number" data-target={stat.number}>
                    0
                  </div>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <p className="stat-label">{stat.label}</p>
                <div className="stat-bar">
                  <div className="stat-progress"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Healthcare Professionals</h2>
            <p className="section-subtitle">What our partners say about our services and support</p>
          </div>
          <div className="testimonials-container" ref={testimonialsRef}>
            <div className="testimonials-track" ref={testimonialsTrackRef}>
              {[
                {
                  name: 'Dr. Sarah Kimani',
                  role: 'Chief Medical Officer',
                  hospital: 'Nairobi General Hospital',
                  text: 'Kinya Medical has been instrumental in upgrading our facility with state-of-the-art equipment that has significantly improved patient care outcomes.',
                  avatar: '👩‍⚕️',
                  rating: 5
                },
                {
                  name: 'Dr. James Omondi',
                  role: 'Hospital Director',
                  hospital: 'Mombasa Coastal Medical',
                  text: 'Their support team is exceptional - always available, knowledgeable, and responsive to our needs. A true partnership in healthcare delivery.',
                  avatar: '👨‍⚕️',
                  rating: 5
                },
                {
                  name: 'Dr. Grace Wambui',
                  role: 'Head of Pediatrics',
                  hospital: 'Kenyatta National Hospital',
                  text: 'The quality of products and reliability of delivery make Kinya Medical our preferred supplier for all medical equipment needs.',
                  avatar: '👩‍⚕️',
                  rating: 5
                },
                {
                  name: 'Dr. Michael Otieno',
                  role: 'Surgical Department Head',
                  hospital: 'Aga Khan Hospital',
                  text: 'The training provided by Kinya Medical has enhanced our surgical team capabilities significantly.',
                  avatar: '👨‍⚕️',
                  rating: 5
                },
                {
                  name: 'Dr. Linda Chebet',
                  role: 'Medical Director',
                  hospital: 'Nakuru Provincial Hospital',
                  text: 'Excellent after-sales service and maintenance support. They truly care about their clients.',
                  avatar: '👩‍⚕️',
                  rating: 5
                },
                {
                  name: 'Dr. Robert Mwangi',
                  role: 'ICU Specialist',
                  hospital: 'Mater Hospital',
                  text: 'The patient monitoring systems we purchased have revolutionized our critical care unit.',
                  avatar: '👨‍⚕️',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p>{testimonial.text}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <span>{testimonial.hospital}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Enhance Your Healthcare Services?</h2>
            <p>Contact us today for a personalized consultation and discover how our solutions can transform your medical practice.</p>
            <div className="cta-buttons">
              <a href="tel:+254700000000" className="btn btn-light">
                <span>Call Now</span>
                <i className="fas fa-phone"></i>
              </a>
              <a href="#contact" className="btn btn-outline-light">
                <span>Contact Us</span>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button 
        className="whatsapp-float"
        onClick={handleWhatsAppClick}
        aria-label="Chat with us on WhatsApp"
      >
        <div className="whatsapp-icon">
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="whatsapp-tooltip">
          Chat with us on WhatsApp!
        </div>
        <div className="pulse-animation"></div>
      </button>

      {/* AI Assistant Chat Box */}
      <div className={`ai-assistant ${isChatOpen ? 'open' : ''} ${theme}-theme`}>
        <button className="ai-chat-toggle" onClick={toggleChat}>
          <i className={`fas ${isChatOpen ? 'fa-times' : 'fa-comment-medical'}`}></i>
          <span className="pulse-dot"></span>
        </button>

        <div ref={chatBoxRef} className="ai-chat-box">
          <div className="chat-header">
            <div className="chat-avatar">
              <i className="fas fa-robot"></i>
            </div>
            <div className="chat-info">
              <h3>Kinya Medical AI Assistant</h3>
              <span className="status online">Online now</span>
            </div>
            <button className="chat-minimize" onClick={toggleChat}>
              <i className="fas fa-minus"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}-message`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message ai-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-responses">
            <span>Quick questions:</span>
            {quickResponses.map((response, index) => (
              <button 
                key={index}
                className="quick-response-btn"
                onClick={() => handleQuickResponse(response)}
              >
                {response}
              </button>
            ))}
          </div>

          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <div className="input-container">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="chat-input"
              />
              <button type="submit" className="send-button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;