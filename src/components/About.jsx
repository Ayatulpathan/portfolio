import { motion } from 'framer-motion'
import { MapPin, Calendar, Coffee, Code } from 'lucide-react'

const About = () => {
  // ✏️ CHANGE THESE STATS
  const stats = [
    { icon: <Code />, value: '10+', label: 'Projects' },
    { icon: <Coffee />, value: '2+', label: 'Years Exp' },
    { icon: <Calendar />, value: '5+', label: 'Clients' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span>Me</span>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* ✏️ CHANGE THIS IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&h=600&fit=crop"
              alt="About"
            />
            <div className="experience-card">
              <span className="number">2+</span>
              <span className="text">Years Experience</span>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* ✏️ CHANGE ALL THIS TEXT */}
            <h3>A Passionate Web Developer</h3>
            <p>
              I am a passionate web developer who loves creating beautiful and
              functional websites. I specialize in React, JavaScript, and modern
              web technologies.
            </p>
            <p>
              When I am not coding, you will find me learning new technologies,
              working on personal projects, or enjoying a good cup of coffee.
            </p>

            <div className="info-row">
              {/* ✏️ CHANGE YOUR LOCATION */}
              <div className="info-item">
                <MapPin size={18} />
                <span>Your City, Country</span>
              </div>
              <div className="info-item">
                <Calendar size={18} />
                <span>Available for Work</span>
              </div>
            </div>

            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  {stat.icon}
                  <span className="value">{stat.value}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
