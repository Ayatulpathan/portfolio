import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // ✏️ CHANGE THESE TO YOUR ROLES
  const words = [
    'Web Developer',
    'React Developer',
    'Frontend Developer',
    'UI Designer',
  ]

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1))
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setText(currentWord.substring(0, text.length - 1))
          if (text === '') {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words])

  // ✏️ CHANGE THESE TO YOUR SOCIAL LINKS
  const socials = [
    { icon: <Github size={22} />, url: 'https://github.com/yourusername' },
    {
      icon: <Linkedin size={22} />,
      url: 'https://linkedin.com/in/yourusername',
    },
    { icon: <Twitter size={22} />, url: 'https://twitter.com/yourusername' },
    { icon: <Mail size={22} />, url: 'mailto:your@email.com' },
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="greeting">👋 Hello, I am</span>
          {/* ✏️ CHANGE TO YOUR NAME */}
          <h1>Ayatul Khan Pathan</h1>
          <h2>
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          {/* ✏️ CHANGE TO YOUR DESCRIPTION */}
          <p>
            I create beautiful, responsive websites and applications that
            deliver exceptional user experiences.
          </p>

          <div className="hero-btns">
            <Link to="projects" smooth className="btn primary">
              View Projects
            </Link>
            <Link to="contact" smooth className="btn secondary">
              Contact Me
            </Link>
          </div>

          <div className="socials">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-container">
            {/* ✏️ CHANGE TO YOUR PHOTO URL */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
              alt="Profile"
            />
          </div>
        </motion.div>
      </div>

      <Link to="about" smooth className="scroll-down">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </Link>
    </section>
  )
}

export default Hero
