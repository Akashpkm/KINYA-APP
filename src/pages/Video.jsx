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
      title: 'Surgery on HOPE using 25G Dual Port Vitrectomy Cutter',
      description: 'Experience a detailed surgical demonstration of a vitrectomy procedure using the advanced 25G Dual Port Vitrectomy Cutter on the HOPE system. This video showcases the precision, control, and efficiency of modern microincision vitrectomy surgery, highlighting the advantages of dual-port technology in improving visualization, fluidics, and surgical outcomes.',
      thumbnail: './THUMB/THUMB1.png',
      duration: '11:08',
      videoUrl: 'https://www.youtube.com/embed/0WHkJ60rDFc?si=-2FSOIytWbToq1JU',
      youtubeId: '0WHkJ60rDFc',
      type: 'youtube'
    },
    {
      id: 2,
      title: 'TRD Surgery on HOPE Vitrectomy system by Dr. Sriramgopal',
      description: 'Join Dr. Sriramgopal as he performs a Tractional Retinal Detachment (TRD) surgery using the advanced HOPE Vitrectomy System. This video demonstrates key surgical techniques, precision handling, and the superior performance of the HOPE system in managing complex retinal conditions. ',
      thumbnail: './THUMB/TUMB2.png',
      duration: '11:14',
      videoUrl: 'https://www.youtube.com/embed/FaBGlpKs5E0?si=DwGyz8N8_elEaA8F',
      youtubeId: 'FaBGlpKs5E0',
      type: 'youtube'
    },
    {
      id: 3,
      title: 'Customer Testimonial: Nairobi Hospital',
      description: 'Hear from our partners at Nairobi Hospital about their experience with our products',
      thumbnail: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      duration: '3:15',
      videoUrl: 'https://www.facebook.com/share/v/1EBbCAdo5m/',
      youtubeId: 'XIMLoLxmTDw',
      type: 'youtube'
    },
    {
      id: 4,
      title: 'Dr.Ruchir - Diabetic surgery using Constellation Cutter on HOPE vitrectomy',
      description: 'Watch Dr. Ruchir perform a diabetic vitrectomy surgery using the Constellation Cutter on the HOPE Vitrectomy System. This video highlights the precision, stability, and advanced control offered by the HOPE platform in managing diabetic retinal complications. A valuable educational resource for ophthalmic surgeons and medical professionals focusing on modern vitreoretinal surgical innovations.',
      thumbnail: './THUMB/THUMB3.png',
      duration: '11:14',
      videoUrl: 'https://drive.google.com/file/d/1OYJfpZIpEhJs9iHN6n3cLq-UHn9btEVZ/preview',
      youtubeId: '',
      type: 'drive'
    },
  
    
    {
      id: 5,
      title: 'Managieng an Aphakic Retinal Detachment with Pars Plana Vitrectomy (PPV + EL + SOI).',
      description: 'This surgical video demonstrates the management of an aphakic retinal detachment using Pars Plana Vitrectomy (PPV) combined with Endolaser (EL) and Silicone Oil Injection (SOI). The procedure showcases precise surgical techniques, effective retinal stabilization, and postoperative management strategies. An excellent educational resource for ophthalmic surgeons and trainees.',
      thumbnail: './THUMB/THUMB4.png',
      duration: '9:32',
      videoUrl: 'https://www.youtube.com/embed/xpXXRgzLYxc?si=AH6LTCA04kFEiTx6', // Google Drive video
      youtubeId: 'AH6LTCA04kFEiTx6',
      type: 'drive'
    }
  ];

  const featuredVideo = {
    id: 0,
    title: 'Introduction to Kinya Medical',
    description: 'Learn about our company mission, values, and the range of products and services we offer to healthcare providers across Kenya.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '10:35',
    videoUrl: '/videos/company-intro.mp4', // Local video
    youtubeId: '',
    type: 'local'
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
    // Immediately scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Small delay to ensure scroll completes before modal opens
    setTimeout(() => {
      setPlayingVideo(video);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }, 300);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setPlayingVideo(null);
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
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

  const VideoPlayer = ({ video }) => {
    if (video.type === 'youtube' && video.youtubeId) {
      return (
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
    } else if (video.type === 'drive') {
      // Google Drive video
      return (
        <div className="video-player-container">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
    } else {
      // Local video or direct URL
      return (
        <div className="video-player-container">
          <div className="video-wrapper">
            <video
              controls
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            >
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
    }
  };

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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal - Always positioned at top */}
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