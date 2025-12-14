import { motion } from 'framer-motion'

const Skills = () => {
  // ✏️ CHANGE THESE TO YOUR SKILLS
  const skills = [
    { name: 'HTML', level: 90, color: '#E34F26' },
    { name: 'CSS', level: 85, color: '#1572B6' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E' },
    { name: 'React', level: 75, color: '#61DAFB' },
    { name: 'Node.js', level: 70, color: '#339933' },
    { name: 'Python', level: 65, color: '#3776AB' },
    { name: 'Git', level: 80, color: '#F05032' },
    { name: 'MongoDB', level: 60, color: '#47A248' },
  ]

  // ✏️ CHANGE THESE TO YOUR TOOLS
  const tools = [
    '⚛️ React',
    '📘 JavaScript',
    '🟢 Node.js',
    '🍃 MongoDB',
    '🎨 CSS',
    '🐙 Git',
    '💻 VS Code',
    '🌐 HTML',
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span>Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  style={{ background: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tools"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Tech Stack</h3>
          <div className="tools-grid">
            {tools.map((tool) => (
              <motion.div
                key={tool}
                className="tool-item"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
