import { Link } from 'react-scroll'
import { Heart, Code2 } from 'lucide-react'

const Footer = () => {
  const links = ['Home', 'About', 'Skills','Experience','Certifications', 'Projects', 'Contact']

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Code2 size={28} />
            {/* ✏️ CHANGE TO YOUR NAME */}
            <span>Ayatul Khan Pathan</span>
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
            {/* ✏️ CHANGE TO YOUR NAME */}© {new Date().getFullYear()} Ayatul
            Khan Pathan. Made with <Heart size={14} className="heart" /> using
            React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
