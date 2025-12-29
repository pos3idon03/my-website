import AppCard from './AppCard'
import '@/assets/styles/_apps-grid.scss'

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
  appLink: string
  logicalViewLink: string
  techStack?: string[]
  techDetails?: TechDetails
}

function AppsGrid() {
  const apps: App[] = [
    {
      name: 'Agentic Financial Advisor',
      appLink: 'https://financial-agent-artemis-kouniakis-709432e3.koyeb.app/',
      logicalViewLink: '#',
      techDetails: {
        backend: [
          'Python 3.11',
          'FastAPI 0.104.1 — REST API framework',
          'Uvicorn 0.24.0 — ASGI server',
          'Gunicorn 21.2.0 — Production WSGI/ASGI server (4 workers with UvicornWorker)',
          'Pydantic 2.5.0 — Data validation and settings',
          'CrewAI 0.28.8 — Multi-agent AI framework',
          'LangChain 0.1.20 — LLM orchestration framework',
          'python-dotenv 1.0.0 — Environment variable management',
          'httpx 0.25.2 — Async HTTP client',
          'requests 2.31.0 — HTTP client for API calls'
        ],
        frontend: [
          'React 18.2.0',
          'React DOM 18.2.0',
          'React Scripts 5.0.1 — Build tool and dev server',
          'ESLint — Linting (via react-app config)'
        ],
        aiMl: [
          'Google Gemini 2.0 Flash — AI model for financial analysis (via langchain-google-genai 1.0.3)',
          'CrewAI — Multi-agent orchestration (Research Analyst + Investment Strategist agents)',
          'Embedchain 0.1.112 — Embedding and vector store framework',
          'ChromaDB 0.4.24 — Vector database (dependency of Embedchain)'
        ],
        infrastructure: [
          'Docker — Containerization',
          'Multi-stage builds (frontend builder + production runtime)',
          'Separate Dockerfiles: Dockerfile.dev, Dockerfile.prod, Dockerfile.koyeb',
          'Koyeb — Deployment platform',
          'Nginx — Web server (frontend static files)',
          'Node.js 18 — Frontend build environment',
          'Python 3.11-slim — Runtime base image'
        ],
        dataStorage: [
          'Stateless architecture — No persistent data storage',
          'External API integration — Alpha Vantage (stock data), Tavily (financial news)',
          'Embedchain config — JSON config files for embedchain initialization (no active data persistence)'
        ],
        externalServices: [
          'Alpha Vantage API — Stock quotes, fundamental metrics, technical indicators',
          'Tavily API — Financial news search and market sentiment analysis'
        ]
      }
    },
    // {
    //   name: 'Agentic Code Analysis',
    //   appLink: '#',
    //   logicalViewLink: '#',
    //   techStack: ['TypeScript', 'Node.js', 'LangChain', 'MongoDB']
    // },
    {
      name: 'Agentic Requirement Creation',
      appLink: 'https://agentic-requirements-artemis-kouniakis-36f66717.koyeb.app/',
      logicalViewLink: '#',
      techDetails: {
        backend: [
          'Python 3.11',
          'FastAPI — REST API framework',
          'Uvicorn — ASGI server',
          'Gunicorn — Production WSGI/ASGI server (4 workers with UvicornWorker)',
          'Pydantic 2.5.0 — Data validation and settings',
          'google-generativeai 0.8.3 — Gemini API client',
          'sse-starlette 2.1.0 — Server-Sent Events',
          'python-dotenv — Environment variable management',
          'python-multipart — Form data handling'
        ],
        frontend: [
          'React 19.2.0',
          'TypeScript 5.9.3',
          'Vite 7.2.4 — Build tool and dev server',
          'Tailwind CSS 3.4.17 — Utility-first CSS',
          'SCSS/Sass 1.97.1 — CSS preprocessing',
          'Axios 1.13.2 — HTTP client',
          'ESLint — Linting'
        ],
        aiMl: [
          'Google Gemini 2.0 Flash — AI model for requirements analysis'
        ],
        infrastructure: [
          'Docker — Containerization',
          'Multi-stage builds (frontend builder + production runtime)',
          'Separate Dockerfiles: Dockerfile.dev, Dockerfile.prod, Dockerfile.koyeb',
          'Koyeb — Deployment platform',
          'Nginx — Web server (frontend)',
          'Node.js 20 — Frontend build environment'
        ],
        dataStorage: [
          'File-based storage — JSON files on filesystem with file locking (fcntl)'
        ],
        externalServices: [
          'No External Services'
        ]
      }
    },
    // {
    //   name: 'RAG Sports',
    //   appLink: '#',
    //   logicalViewLink: '#',
    //   techStack: ['React', 'Python', 'LangChain', 'Vector DB']
    // }
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

