import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projectsData from '../data/projectsData.json';

// 🔽 Import des images
import img1 from '../assets/chickandclick.avif';
import img2 from '../assets/mcdbackground.jpg';
import img3 from '../assets/backCoffe.jpeg';
import img4 from '../assets/signup-bg.jpg';
import img5 from '../assets/about-1.jpg';
import img6 from '../assets/login.jpeg';
import img7 from '../assets/FinShark.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section id="projects" className="py-5 px-3">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Mes Projets</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Découvrez quelques-uns de mes projets récents et les technologies utilisées
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card border shadow-sm h-100 position-relative overflow-hidden">
                <div className="position-relative">
                  <img
                    src={images[index]}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: '12rem', objectFit: 'cover' }}
                  />
                  <div
                    className="overlay d-flex justify-content-center align-items-center gap-3 position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      opacity: 0,
                      transition: 'opacity 0.2s ease-in-out',
                    }}
                  >
                    <a
                      href={project.liveUrl}
                      className="btn btn-primary rounded-circle p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Voir en ligne"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn btn-primary rounded-circle p-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Voir sur GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h5">{project.title}</h3>
                  <p className="card-text text-muted small mb-3">{project.description}</p>

                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge bg-secondary text-light"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .card:hover .overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
