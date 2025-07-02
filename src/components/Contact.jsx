import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import contactData from '../data/contactData.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactInfo, setContactInfo] = useState([]);
  const { toast } = useToast();

  const iconMap = { Mail, Phone, MapPin };

  useEffect(() => {
    const infoWithIcons = contactData.contactInfo.map(info => ({
      ...info,
      icon: iconMap[info.icon]
    }));
    setContactInfo(infoWithIcons);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 px-3">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Contactez-moi</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Prêt à donner vie à votre projet ? Parlons-en !
          </p>
        </div>

        <div className="row gx-4 gy-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <h3 className="h4 fw-semibold mb-4">Restons en contact</h3>
            <p className="text-muted mb-4">
              N&apos;hésitez pas à me contacter pour discuter de votre projet, poser des questions ou simplement échanger sur le développement web.
            </p>

            <div className="d-flex flex-column gap-3">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="d-flex align-items-center gap-3 p-3 rounded bg-secondary bg-opacity-10 text-decoration-none text-reset transition"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.classList.add('bg-opacity-25')}
                  onMouseLeave={e => e.currentTarget.classList.remove('bg-opacity-25')}
                >
                  <div className="text-primary">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="fw-medium">{info.title}</div>
                    <div className="text-muted">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="votre.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Sujet du message"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-control"
                  placeholder="Votre message"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <Send size={20} />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
