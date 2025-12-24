import '@/assets/styles/_app-card.scss'

interface App {
  name: string
  appLink: string
  logicalViewLink: string
  techStack: string[]
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
    </div>
  )
}

export default AppCard

