import React, { useState, useEffect } from 'react';
import { Code, Coffee, Users, Award } from 'lucide-react';
import aboutData from '../data/aboutData.json';

const About = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [stats, setStats] = useState([]);

  const iconMap = { Code, Coffee, Users, Award };

  useEffect(() => {
    setPersonalInfo(aboutData.personalInfo);
    const statsWithIcons = aboutData.stats.map(stat => ({
      ...stat,
      icon: iconMap[stat.icon]
    }));
    setStats(statsWithIcons);
  }, []);

  if (!personalInfo) return null;

  return (
    <section id="about" className="py-5 px-3">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">À propos de moi</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Découvrez mon parcours et ma passion pour le développement web
          </p>
        </div>

        <div className="row align-items-center gx-4 gy-4">
          <div className="col-md-6">
            <h3 className="h4 fw-semibold mb-4">{personalInfo.title}</h3>
            <p className="text-muted mb-3">{personalInfo.description1}</p>
            
            <div className="d-flex flex-wrap gap-2">
              {personalInfo.technologies.map((tech) => (
                <span
                  key={tech}
                  className="badge bg-secondary text-white rounded-pill px-3 py-1"
                  style={{ fontSize: '0.875rem' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="col-md-6 row g-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="col-6 text-center p-4 rounded border bg-light shadow-sm"
                style={{ cursor: 'default', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0,0,0,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0,0,0,0.075)')}
              >
                <stat.icon className="mb-3" size={32} color="#0d6efd" />
                <div className="fs-4 fw-bold text-primary mb-1">{stat.value}</div>
                <div className="small text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
