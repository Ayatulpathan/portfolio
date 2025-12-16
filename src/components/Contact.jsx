import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      // ✏️ TO MAKE CONTACT FORM WORK:
      // 1. Go to https://formspree.io
      // 2. Create FREE account
      // 3. Create new form
      // 4. Replace YOUR_FORM_ID with your form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }

    setTimeout(() => setStatus(''), 5000)
  }

  // ✏️ CHANGE THESE TO YOUR INFO
  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'pathanayatul@gmail.com',
      href: 'mailto:pathanayatul@gmail.com',
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+8801766374700',
      href: 'tel:+8801766374700',
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
    },
  ]

  // ✏️ CHANGE THESE TO YOUR SOCIAL LINKS
  const socials = [
    { icon: <Github />, url: 'https://github.com/Ayatulpathan' },
    {
      icon: <Linkedin />,
      url: 'www.linkedin.com/in/ayatul-pathan/',
    },
    { icon: <Facebook />, url: 'https://twitter.com/yourusername' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In <span>Touch</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let us work together!</h3>
            <p>
              Have a project in mind? I would love to hear about it. Send me a
              message and let us create something amazing.
            </p>

            <div className="info-cards">
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} className="info-card">
                  <div className="icon">{info.icon}</div>
                  <div>
                    <span className="label">{info.label}</span>
                    <span className="value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
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

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="form-message success">
                ✅ Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="form-message error">
                ❌ Failed to send. Please try again.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
