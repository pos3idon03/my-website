import '@/assets/styles/_social-links.scss'
import '@/assets/styles/_section-titles.scss'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { ReactElement } from 'react'

interface SocialLink {
  name: string
  url: string
  icon: ReactElement
}

function SocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/artemis-kouniakis/',
      icon: <FaLinkedin />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: <FaGithub />
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/artemiskoun/',
      icon: <FaInstagram />
    }
  ]

  return (
    <div className="social-links-section">
      <h2 className="section-title">Connect With Me</h2>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon">{link.icon}</span>
            <span className="social-name">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks

