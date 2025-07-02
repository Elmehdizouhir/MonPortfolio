import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Accueil', id: 'hero' },
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Projets', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className="position-fixed top-0 start-0 end-0 bg-white bg-opacity-75 backdrop-blur border-bottom"
      style={{ zIndex: 1050 }}
    >
      <nav className="container px-3 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold text-primary">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex gap-4">
            {menuItems.map(({ label, id }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="btn btn-link text-dark fw-medium"
                style={{ textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
                onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="btn btn-outline-primary d-md-none"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="d-md-none mt-3 pb-3 border-top">
            <div className="d-flex flex-column gap-2">
              {menuItems.map(({ label, id }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="btn btn-link text-start text-dark"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
                  onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
