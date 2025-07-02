import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Search, Palette, Code, Zap } from 'lucide-react';
import servicesData from '../data/servicesData.json';

const Services = () => {
  const [services, setServices] = useState([]);

  const iconMap = {
    Monitor,
    Smartphone,
    Search,
    Palette,
    Code,
    Zap
  };

  useEffect(() => {
    const servicesWithIcons = servicesData.services.map(service => ({
      ...service,
      icon: iconMap[service.icon]
    }));
    setServices(servicesWithIcons);
  }, []);

  return (
    <section id="services" className="py-5 px-3" style={{ backgroundColor: 'rgba(248, 249, 250, 0.3)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Mes Services</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Des solutions complètes pour tous vos besoins en développement web
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div
                  className="card border shadow-sm h-100 p-4 rounded"
                  style={{ transition: 'all 0.2s ease' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.classList.add('shadow-lg');
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.classList.remove('shadow-lg');
                  }}
                >
                  <div className="text-primary mb-3">
                    <Icon size={48} />
                  </div>
                  <h3 className="h5 fw-semibold mb-3">{service.title}</h3>
                  <p className="text-muted mb-3">{service.description}</p>
                  <ul className="list-unstyled">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="d-flex align-items-center mb-2 small">
                        <span
                          className="me-3 rounded-circle"
                          style={{
                            display: 'inline-block',
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#0d6efd'
                          }}
                        ></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5">
          <a
            href="#contact"
            className="btn btn-primary px-5 py-3"
          >
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
