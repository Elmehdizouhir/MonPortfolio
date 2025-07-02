import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light border-top py-5 px-3">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-md-4">
            <h3 className="h5 fw-semibold mb-3">Développeur Web</h3>
            <p className="text-muted lh-base">
              Passionné par la création d&apos;expériences web exceptionnelles <br />
              avec les technologies modernes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h3 className="h5 fw-semibold mb-3">Liens rapides</h3>
            <ul className="list-unstyled">
              {['À propos', 'Compétences', 'Projets', 'Services', 'Contact'].map((link, index) => (
                <li key={link} className="mb-2">
                  <a
                    href={`#${['about', 'skills', 'projects', 'services', 'contact'][index]}`}
                    className="text-muted text-decoration-none"
                    onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
                    onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h3 className="h5 fw-semibold mb-3">Suivez-moi</h3>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/Elmehdizouhir"
                className="text-muted text-decoration-none"
                aria-label="GitHub"
                onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
                onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
              >
                <Github size={24} />
              </a>
              <a
                href="https://github.com/Elmehdizouhir"
                className="text-muted text-decoration-none"
                aria-label="LinkedIn"
                onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
                onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:zouhairmahdi123@gmail.com"
                className="text-muted text-decoration-none"
                aria-label="Email"
                onMouseEnter={e => e.currentTarget.classList.add('text-primary')}
                onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-top mt-4 pt-4 text-center">
          <p className="text-muted d-flex justify-content-center align-items-center gap-1 mb-0">
            <span>© 2024 Portfolio. Fait avec</span>
            <Heart size={16} className="text-danger" />
            <span>par un développeur passionné</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
