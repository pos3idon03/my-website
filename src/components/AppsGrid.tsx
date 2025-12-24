import AppCard from './AppCard'
import '@/assets/styles/_apps-grid.scss'

interface App {
  name: string
  appLink: string
  logicalViewLink: string
  techStack: string[]
}

function AppsGrid() {
  const apps: App[] = [
    {
      name: 'Agentic Financial Advisor',
      appLink: '#',
      logicalViewLink: '#',
      techStack: ['Vue.js', 'Python', 'OpenAI API', 'PostgreSQL']
    },
    {
      name: 'Agentic Code Analysis',
      appLink: '#',
      logicalViewLink: '#',
      techStack: ['TypeScript', 'Node.js', 'LangChain', 'MongoDB']
    },
    {
      name: 'Agentic Requirement Creation',
      appLink: '#',
      logicalViewLink: '#',
      techStack: ['Vue.js', 'Python', 'OpenAI API', 'Redis']
    },
    {
      name: 'RAG Sports',
      appLink: '#',
      logicalViewLink: '#',
      techStack: ['React', 'Python', 'LangChain', 'Vector DB']
    }
  ]

  return (
    <div className="apps-grid">
      {apps.map((app) => (
        <AppCard key={app.name} app={app} />
      ))}
    </div>
  )
}

export default AppsGrid

