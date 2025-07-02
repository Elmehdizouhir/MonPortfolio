import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3 pt-5 position-relative"
    >
      <div className="fade-in">
        <div className="mb-4">
          <div
            className="mx-auto mb-3 rounded-circle overflow-hidden border border-4 shadow"
            style={{
              width: '8rem',
              height: '8rem',
              borderColor: 'rgba(13, 110, 253, 0.2)', // couleur primaire avec transparence
              boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)'
            }}
          >
            <img
              src="../../src/assets/MEHDI.jpg"
              alt="Photo de profil - Développeur Web"
              className="w-100 h-100 object-fit-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <h1
          className="fw-bold mb-3"
          style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(to right, #0d6efd, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Développeur Web
        </h1>

        <h2 className="fs-4 text-muted mb-4">
          Créateur d&apos;expériences numériques modernes
        </h2>

        <p className="fs-5 text-muted mx-auto mb-5" style={{ maxWidth: '36rem' }}>
          Passionné par le développement web, je crée des applications modernes, performantes et accessibles en utilisant les dernières technologies.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          <a
            href="#contact"
            className="btn btn-primary px-4 py-2"
            style={{ minWidth: '140px' }}
          >
            Me contacter
          </a>
          <a
            href="#projects"
            className="btn btn-outline-secondary px-4 py-2"
            style={{ minWidth: '140px' }}
          >
            Voir mes projets
          </a>
        </div>

        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://github.com/Elmehdizouhir"
            className="text-muted text-decoration-none "
            onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
            onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/elmehdi-zouhir-b36a7a258/"
            className="text-muted text-decoration-none"
            onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
            onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:zouhairmahdi123@gmail.com"
            className="text-muted text-decoration-none"
            onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
            onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="position-absolute bottom-0 mb-4 btn btn-link text-muted"
        style={{ left: '50%', transform: 'translateX(-50%)', animation: 'bounce 1s infinite' }}
        aria-label="Scroll to about"
        type="button"
      >
        <ChevronDown size={32} />
      </button>

      {/* Ajout CSS pour animation bounce */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-15%); }
        }
        .fade-in {
          animation: fadeIn 1.2s ease forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}
      </style>
    </section>
  );
};

export default Hero;
