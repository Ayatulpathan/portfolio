import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  // ✏️ CHANGE THESE TO YOUR EXPERIENCE
  const experiences = [
    {
      id: 1,
      role: 'Technical Support Executive',
      company: 'Devtriple S',
      location: 'Dhaka, Bangladesh',
      duration: 'June 2024 - Present',
      type: 'Full-time',
      description: [
        'Provide technical support and assistance to customers via phone, email, or chat ,Identify', 'diagnose technical issues reported by customers, Resolve technical problems in a timely and efficient manner' , 'Assist customers with software installations and upgrades, Document and track customer issues', 'Collaborate with other teams to ensure timely resolution of customer issues',
      
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
