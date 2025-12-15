import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  // ✏️ CHANGE THESE TO YOUR EXPERIENCE
  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Google',
      location: 'San Francisco, USA',
      duration: 'Jan 2022 - Present',
      type: 'Full-time',
      description: [
        'Led development of customer-facing web applications using React',
        'Improved website performance by 40% through code optimization',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with design team to implement responsive UI/UX',
      ],
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Microsoft',
      location: 'Seattle, USA',
      duration: 'Jun 2020 - Dec 2021',
      type: 'Full-time',
      description: [
        'Developed and maintained web applications using React and TypeScript',
        'Implemented RESTful APIs integration with backend services',
        'Participated in agile development processes and sprint planning',
        'Wrote unit tests achieving 85% code coverage',
      ],
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'Amazon',
      location: 'Remote',
      duration: 'Jan 2020 - May 2020',
      type: 'Internship',
      description: [
        'Built responsive web pages using HTML, CSS, and JavaScript',
        'Assisted in developing React components for internal tools',
        'Learned best practices for version control using Git',
        'Participated in daily standups and team meetings',
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work <span>Experience</span>
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={24} />
                </div>
                <div className="experience-title">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <span className="experience-type">{exp.type}</span>
              </div>

              <div className="experience-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
