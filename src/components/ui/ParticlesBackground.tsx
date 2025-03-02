import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load particles.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Adjust particle count based on device
    const particleCount = isMobile ? 100 : 180;
    
    script.onload = () => {
      if (window.particlesJS && containerRef.current) {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": particleCount,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#87cefa"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": 0.8,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#87cefa",
              "opacity": 0.4,
              "width": 1,
              "shadow": {
                "enable": false,
                "blur": 5,
                "color": "rgba(3, 127, 255, 0.5)"
              }
            },
            "move": {
              "enable": true,
              "speed": isMobile ? 1.5 : 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "attract"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 200,
                "line_linked": {
                  "opacity": 1
                }
              },
              "attract": {
                "distance": 200,
                "duration": 0.4,
                "speed": 3
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 150,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 10
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
          }
        });
      }
    };
    
    document.body.appendChild(script);
    
    // Toggle between attract and grab modes on click
    let isAttractMode = true;
    
    const toggleInteractionMode = () => {
      const pJSCanvas = document.querySelector('#particles-js canvas');
      if (!pJSCanvas || !window.particlesJS) return;
      
      isAttractMode = !isAttractMode;
      
      // Recreate particles with new mode
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": particleCount,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#87cefa"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#87cefa",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": isMobile ? 1.5 : 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": isAttractMode ? "attract" : "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 200,
              "line_linked": {
                "opacity": 1
              }
            },
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "speed": 3
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 150,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 10
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    };
    
    // Add double-click event to toggle modes
    const handleDoubleClick = () => {
      toggleInteractionMode();
    };
    
    // Add touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // Two finger touch to toggle modes
        toggleInteractionMode();
      }
    };
    
    document.addEventListener('dblclick', handleDoubleClick);
    document.addEventListener('touchstart', handleTouchStart);
    
    // Add mouse move tracking for more responsive attraction
    const handleMouseMove = (e: MouseEvent) => {
      if (isAttractMode) {
        // This creates a more responsive attraction effect
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // We don't need to do anything here as particles.js handles the interaction,
        // but this event listener could be used for custom effects in the future
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Remove canvas created by particles.js
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      document.removeEventListener('dblclick', handleDoubleClick);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default ParticlesBackground; 