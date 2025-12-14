import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  // ✏️ CHANGE THESE TO YOUR PROJECTS
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description:
        'A full-featured online store with shopping cart functionality.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Manager App',
      description:
        'A productivity app to manage daily tasks with drag and drop.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'frontend',
      tech: ['React', 'CSS', 'LocalStorage'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location search and forecasts.',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      category: 'frontend',
      tech: ['JavaScript', 'API', 'CSS'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A blogging platform with user authentication.',
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      category: 'fullstack',
      tech: ['React', 'Express', 'MongoDB'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects and skills.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'frontend',
      tech: ['React', 'Framer Motion', 'CSS'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat app with private messaging.',
      image:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      category: 'fullstack',
      tech: ['React', 'Socket.io', 'Node.js'],
      live: 'https://example.com',
      github: 'https://github.com',
    },
  ]

  const filters = ['all', 'frontend', 'fullstack']

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span>Projects</span>
        </motion.h2>

        <div className="filter-btns">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
