import { Link } from 'react-scroll'
import { Heart, Code2 } from 'lucide-react'

const Footer = () => {
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Code2 size={28} />
            {/* ✏️ CHANGE TO YOUR NAME */}
            <span>YourName</span>
          </div>

          <nav className="footer-nav">
            {links.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}
                smooth
                duration={500}
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            {/* ✏️ CHANGE TO YOUR NAME */}© {new Date().getFullYear()} Your
            Name. Made with <Heart size={14} className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer