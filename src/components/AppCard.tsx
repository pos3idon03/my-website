import '@/assets/styles/_app-card.scss'

interface TechDetails {
  backend?: string[]
  frontend?: string[]
  aiMl?: string[]
  infrastructure?: string[]
  dataStorage?: string[]
  externalServices?: string[]
}

interface App {
  name: string
  description?: string
  appLink: string
  logicalViewLink: string
  techStack?: string[]
  techDetails?: TechDetails
}

interface AppCardProps {
  app: App
}

function AppCard({ app }: AppCardProps) {
  return (
    <div className="app-card">
      <h3 className="app-name">{app.name}</h3>
      <div className="app-links">
        <a
          href={app.appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
        >
          Visit App
        </a>
        <a
          href={app.logicalViewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="logical-view-link"
        >
          View Architecture
        </a>
      </div>
      {app.description && (
        <p className="app-description">{app.description}</p>
      )}
      {app.techDetails ? (
        <div className="tech-details">
          {app.techDetails.backend && (
            <div className="tech-section">
              <h4 className="tech-section-title">Backend</h4>
              <ul className="tech-section-list">
                {app.techDetails.backend.map((item, index) => (
                  <li key={index} className="tech-section-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {app.techDetails.frontend && (
            <div className="tech-section">
              <h4 className="tech-section-title">Frontend</h4>
              <ul className="tech-section-list">
                {app.techDetails.frontend.map((item, index) => (
                  <li key={index} className="tech-section-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {app.techDetails.aiMl && (
            <div className="tech-section">
              <h4 className="tech-section-title">AI/ML</h4>
              <ul className="tech-section-list">
                {app.techDetails.aiMl.map((item, index) => (
                  <li key={index} className="tech-section-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {app.techDetails.infrastructure && (
            <div className="tech-section">
              <h4 className="tech-section-title">Infrastructure & Deployment</h4>
              <ul className="tech-section-list">
                {app.techDetails.infrastructure.map((item, index) => (
                  <li key={index} className="tech-section-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {app.techDetails.dataStorage && (
            <div className="tech-section">
              <h4 className="tech-section-title">Data Storage</h4>
              <ul className="tech-section-list">
                {app.techDetails.dataStorage.map((item, index) => (
                  <li key={index} className="tech-section-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {app.techDetails.externalServices && (
            <div className="tech-section">
              <h4 className="tech-section-title">External Services</h4>
              <ul className="tech-section-list">
                {app.techDetails.externalServices.map((item, index) => (
                  <li key={index} className="tech-section-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : app.techStack ? (
        <div className="tech-stack">
          <h4 className="tech-stack-title">Technology Stack:</h4>
          <div className="tech-stack-items">
            {app.techStack.map((tech) => (
              <span key={tech} className="tech-stack-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AppCard

