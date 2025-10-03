// src/pages/Video.jsx
import React, { useState, useEffect } from 'react';
import './Video.css';

function Video() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoItems = [
    {
      id: 1,
      title: 'Product Demonstration: Digital Stethoscope',
      description: 'Watch how our advanced digital stethoscope improves diagnostic accuracy',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '4:25',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      youtubeId: 'YE7VzlLtp-4'
    },
    {
      id: 2,
      title: 'Training: Proper Use of Portable Ultrasound',
      description: 'Learn how to effectively use our handheld ultrasound device',
      thumbnail: 'https://images.unsplash.com/photo-1592116462606-6bff5a9f8ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '7:42',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      youtubeId: 'mb4n2V-8CjE'
    },
    {
      id: 3,
      title: 'Customer Testimonial: Nairobi Hospital',
      description: 'Hear from our partners at Nairobi Hospital about their experience with our products',
      thumbnail: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '3:15',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      youtubeId: 'XIMLoLxmTDw'
    },
    {
      id: 4,
      title: 'Introduction to Our Pharmaceutical Division',
      description: 'Learn about our quality control processes for pharmaceuticals',
      thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '5:33',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      youtubeId: 't4nM1FoUqY8'
    },
    {
      id: 5,
      title: 'Maintenance Guide: Surgical Instruments',
      description: 'Proper care and maintenance procedures for surgical instruments',
      thumbnail: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '6:18',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      youtubeId: '1H1mZWu9WvI'
    },
    {
      id: 6,
      title: 'ECG Machine Setup and Operation',
      description: 'Step-by-step guide to setting up and using our ECG machines',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '8:07',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      youtubeId: '0ZkAe_7XaA8'
    }
  ];

  const featuredVideo = {
    id: 0,
    title: 'Introduction to Kinya Medical',
    description: 'Learn about our company mission, values, and the range of products and services we offer to healthcare providers across Kenya.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '10:35',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    youtubeId: 'YE7VzlLtp-4'
  };

  // Detect theme changes from navbar
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.body.classList.contains('dark');
      setCurrentTheme(isDark ? 'dark' : 'light');
    };

    // Initial check
    checkTheme();

    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const openVideoModal = (video) => {
    setPlayingVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setPlayingVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        closeVideoModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const VideoPlayer = ({ video }) => (
    <div className="video-player-container">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );

  return (
    <div className={`video-page ${currentTheme}`}>
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Videos</h1>
          <p className="page-subtitle">
            Watch product demonstrations, training tutorials, and customer testimonials
          </p>
        </div>
        
        {/* Featured Video Section */}
        <div className="featured-video-section">
          <div className="featured-video">
            <div className="video-container">
              <div 
                className="video-placeholder featured"
                onClick={() => openVideoModal(featuredVideo)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && openVideoModal(featuredVideo)}
              >
                <img src={featuredVideo.thumbnail} alt={featuredVideo.title} />
                <div className="play-overlay">
                  <i className="fas fa-play-circle"></i>
                  <p>Watch Featured Video</p>
                </div>
                <div className="video-duration">{featuredVideo.duration}</div>
              </div>
            </div>
            <div className="video-details">
              <h2>{featuredVideo.title}</h2>
              <p>{featuredVideo.description}</p>
              <div className="video-meta">
                <span><i className="fas fa-clock"></i> {featuredVideo.duration}</span>
                <span><i className="fas fa-calendar-alt"></i> March 15, 2023</span>
                <span><i className="fas fa-eye"></i> 1,245 views</span>
              </div>
              <button 
                className="watch-btn primary"
                onClick={() => openVideoModal(featuredVideo)}
              >
                <i className="fas fa-play"></i> Watch Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Video Library */}
        <div className="video-library">
          <div className="section-header">
            <h2>Video Library</h2>
            <p>Browse our complete collection of educational and promotional videos</p>
          </div>
          <div className="video-grid">
            {videoItems.map(video => (
              <div key={video.id} className="video-card">
                <div 
                  className="video-thumbnail"
                  onClick={() => openVideoModal(video)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && openVideoModal(video)}
                >
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <div className="video-actions">
                    <button 
                      className="watch-btn secondary"
                      onClick={() => openVideoModal(video)}
                    >
                      <i className="fas fa-play"></i> Watch Video
                    </button>
                    <button className="save-btn" aria-label="Save video">
                      <i className="far fa-bookmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && playingVideo && (
        <div className="video-modal">
          <div className="modal-overlay" onClick={closeVideoModal}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>{playingVideo.title}</h3>
              <button 
                className="close-btn" 
                onClick={closeVideoModal}
                aria-label="Close video"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <VideoPlayer video={playingVideo} />
            <div className="modal-footer">
              <p>{playingVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;