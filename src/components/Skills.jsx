import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, Palette, Settings, Users } from 'lucide-react';
import skillsData from '../data/skillsData.json';

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState([]);

  const iconMap = {
    Globe,
    Database,
    Palette,
    Settings,
    Code2,
    Users
  };

  useEffect(() => {
    const categoriesWithIcons = skillsData.skillCategories.map(category => ({
      ...category,
      icon: iconMap[category.icon]
    }));
    setSkillCategories(categoriesWithIcons);
  }, []);

  return (
    <section id="skills" className="py-5 px-3" style={{ backgroundColor: 'rgba(248, 249, 250, 0.3)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Mes Compétences</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Technologies et outils que je maîtrise pour créer des solutions digitales performantes
          </p>
        </div>

        <div className="row g-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="col-12 col-md-6 col-lg-4"
              >
                <div
                  className="card border shadow-sm rounded-3 p-4 h-100"
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.classList.add('shadow-lg');
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.classList.remove('shadow-lg');
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="d-flex justify-content-center align-items-center rounded-3 me-3"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: category.color || 'linear-gradient(90deg, #0d6efd, #3b82f6)',
                        color: 'white'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="h5 mb-0">{category.title}</h3>
                  </div>

                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="badge bg-secondary text-light border"
                        style={{ fontSize: '0.85rem', cursor: 'default' }}
                        onMouseEnter={e => e.currentTarget.classList.add('bg-primary', 'border-primary')}
                        onMouseLeave={e => e.currentTarget.classList.remove('bg-primary', 'border-primary')}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
