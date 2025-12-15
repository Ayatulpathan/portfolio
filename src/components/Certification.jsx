import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Building } from 'lucide-react'

const Certification = () => {
  // ✏️ CHANGE THESE TO YOUR CERTIFICATIONS
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'December 2024',
      credentialId: 'ABC123XYZ',
      credentialUrl: 'https://aws.amazon.com/verification',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      skills: ['AWS', 'Cloud Computing', 'Architecture'],
    },
    {
      id: 2,
      title: 'Meta Front-End Developer Professional',
      issuer: 'Meta (Facebook)',
      date: 'October 2024',
      credentialId: 'META456DEF',
      credentialUrl: 'https://coursera.org/verify',
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      skills: ['React', 'JavaScript', 'HTML/CSS'],
    },
    {
      id: 3,
      title: 'Google Data Analytics Professional',
      issuer: 'Google',
      date: 'August 2024',
      credentialId: 'GOOGLE789GHI',
      credentialUrl: 'https://coursera.org/verify',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      skills: ['Data Analysis', 'SQL', 'Tableau'],
    },
    {
      id: 4,
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'June 2024',
      credentialId: 'MS101JKL',
      credentialUrl: 'https://learn.microsoft.com/verify',
      image:
        'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400&h=250&fit=crop',
      skills: ['Azure', 'Cloud Services', 'DevOps'],
    },
    {
      id: 5,
      title: 'Python for Everybody Specialization',
      issuer: 'University of Michigan',
      date: 'April 2024',
      credentialId: 'UMICH202MNO',
      credentialUrl: 'https://coursera.org/verify',
      image:
        'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      skills: ['Python', 'Web Scraping', 'Databases'],
    },
    {
      id: 6,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'February 2024',
      credentialId: 'FCC303PQR',
      credentialUrl: 'https://freecodecamp.org/certification',
      image:
        'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop',
      skills: ['HTML', 'CSS', 'Responsive Design'],
    },
  ]

  return (
    <section id="certification" className="certification">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span>Certifications</span>
        </motion.h2>

        <div className="certification-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
                <div className="certification-badge">
                  <Award size={24} />
                </div>
              </div>

              <div className="certification-content">
                <h3>{cert.title}</h3>

                <div className="certification-issuer">
                  <Building size={16} />
                  <span>{cert.issuer}</span>
                </div>

                <div className="certification-date">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>

                <div className="certification-id">
                  <span>Credential ID: {cert.credentialId}</span>
                </div>

                <div className="certification-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-btn"
                >
                  <ExternalLink size={16} />
                  Verify Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification
