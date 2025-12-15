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
    'Software Support Executive',
    'Web Developer',
  
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
    { icon: <Github size={22} />, url: 'https://github.com/Ayatulpathan' },
    {
      icon: <Linkedin size={22} />,
      url: 'https://linkedin.com/in/https://www.linkedin.com/in/ayatul-pathan',
    },

    { icon: <Mail size={22} />, url: 'mailto:pathanayatul@gmail.com' },
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
            Computer Science graduate with expertise in Software systems,
            software troubleshooting, MIS reporting, and IT system support,
            seeking a Software Support Executive role to deliver efficient issue
            resolution, user training, and high-quality technical support in a
            professional software environment.
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
              src="/1000029083.jpg"
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
