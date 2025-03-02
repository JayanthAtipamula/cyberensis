import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number; // Original X position
  baseY: number; // Original Y position
}

interface Connection {
  from: number;
  to: number;
  distance: number;
}

const NetworkParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const [mousePosition, setMousePosition] = useState<{x: number, y: number} | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        setMousePosition({ x, y });
        e.preventDefault(); // Prevent scrolling while interacting with particles
      }
    };
    
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        setMousePosition({ x, y });
      }
    };
    
    const handleMouseLeave = () => {
      setMousePosition(null);
    };
    
    const handleTouchEnd = () => {
      // Add a small delay before clearing the position to make the effect smoother
      setTimeout(() => setMousePosition(null), 100);
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    // Create particles
    const particleCount = Math.min(Math.max(Math.floor(canvas.width * canvas.height / 12000), 70), 200);
    const particles: Particle[] = [];
    const connections: Connection[] = [];
    const connectionDistance = Math.min(canvas.width, canvas.height) * 0.25;
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1
      });
    }
    
    // Pre-calculate connections
    const updateConnections = () => {
      connections.length = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            connections.push({
              from: i,
              to: j,
              distance
            });
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particle positions
      particles.forEach(particle => {
        // Normal movement
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }
        
        // Mouse interaction
        if (mousePosition) {
          // Calculate distance to mouse
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // If within influence range, move towards mouse
          const influenceRange = 150;
          if (distance < influenceRange) {
            const force = (influenceRange - distance) / influenceRange;
            particle.x += dx * force * 0.03;
            particle.y += dy * force * 0.03;
          } else {
            // Gradually return to base position when not influenced by mouse
            particle.x += (particle.baseX - particle.x) * 0.01;
            particle.y += (particle.baseY - particle.y) * 0.01;
          }
        } else {
          // Gradually return to base position when mouse is not over canvas
          particle.x += (particle.baseX - particle.x) * 0.01;
          particle.y += (particle.baseY - particle.y) * 0.01;
        }
        
        // Draw particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(173, 216, 230, 0.8)'; // Light blue color
        ctx.fill();
      });
      
      // Update connections every few frames for performance
      if (Math.random() < 0.1) {
        updateConnections();
      }
      
      // Draw connections
      connections.forEach(connection => {
        const p1 = particles[connection.from];
        const p2 = particles[connection.to];
        const opacity = 1 - (connection.distance / connectionDistance);
        
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(135, 206, 250, ${opacity * 0.4})`; // Sky blue with opacity
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
      
      // Draw connections to mouse cursor
      if (mousePosition) {
        particles.forEach(particle => {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const cursorInfluenceRange = 150;
          if (distance < cursorInfluenceRange) {
            const opacity = 1 - (distance / cursorInfluenceRange);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mousePosition.x, mousePosition.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default NetworkParticles; 