import { useEffect, useRef } from 'react';
import '../celestial.css';

export default function CelestialBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Limpar estrelas anteriores
    containerRef.current.innerHTML = '';

    // Criar estrelas aleatórias
    const createStars = () => {
      const starCount = 100;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = `star ${['', 'large', 'small'][Math.floor(Math.random() * 3)]}`;
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        
        containerRef.current?.appendChild(star);
      }
    };

    // Criar partículas flutuantes
    const createFloatingParticles = () => {
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'float-particle';
        
        const x = Math.random() * window.innerWidth;
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        particle.style.left = `${x}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        containerRef.current?.appendChild(particle);
      }
    };

    createStars();
    createFloatingParticles();

    // Recriar partículas periodicamente
    const interval = setInterval(() => {
      const particles = containerRef.current?.querySelectorAll('.float-particle');
      if (particles && particles.length < 20) {
        createFloatingParticles();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="celestial-background"
    />
  );
}
