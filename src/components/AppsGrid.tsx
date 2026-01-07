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
  description?: string
  appLink: string
  logicalViewLink: string
  techStack?: string[]
  techDetails?: TechDetails
}

function AppsGrid() {
  const apps: App[] = [
    {
      name: 'Agentic Financial Advisor',
      description: 'A multi-agent financial analysis system built with CrewAI that provides comprehensive, AI-powered stock analysis. The system uses a specialized multi-agent architecture where two AI agents work collaboratively: the Research Analyst agent gathers and interprets financial data, news, and market metrics from multiple sources, while the Investment Strategist agent synthesizes these findings into clear, actionable investment recommendations. The system combines fundamental analysis (P/E ratios, market cap, revenue, profit margins), technical analysis (RSI, MACD, SMA, EMA, Bollinger Bands, Stochastic with buy/sell/hold signals), and market sentiment analysis (latest financial news and trends) to generate comprehensive investment recommendations with BUY/HOLD/SELL signals, confidence levels, and risk assessment. The system integrates with Alpha Vantage API for real-time stock quotes, fundamental metrics, and technical indicators, and Tavily API for financial news search and market sentiment analysis.',
      appLink: 'https://financial-agent-artemis-kouniakis-709432e3.koyeb.app/',
      logicalViewLink: '#',
      techDetails: {
        backend: [
          'Python',
          'CrewAI',
          'LangChain',
          'FastAPI'
        ],
        frontend: [
          'React'
        ],
        aiMl: [
          'Google Gemini 2.0 Flash — AI model for financial analysis',
          'Embedchain — Embedding and vector store framework',
          'ChromaDB — Vector database'
        ],
        infrastructure: [
          'Koyeb',
          'Docker',
          'Nginx',
          'Multi-stage builds'
        ],
        dataStorage: [
          'Stateless architecture — No persistent data storage',
          'Embedchain config — JSON config files for embedchain initialization (no active data persistence)'
        ],
        externalServices: [
          'Alpha Vantage API — Stock quotes, fundamental metrics, technical indicators',
          'Tavily API — Financial news search and market sentiment analysis',
          'Alpha Vantage MCP'
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
      description: 'An AI-powered collaborative workspace that utilizes an agentic workflow powered by Gemini 2.0 Flash to help teams build high-quality Business Requirements Documents (BRD) and Technical Requirements Documents (TRD) through real-time AI critique and suggestions. The system features a dual-perspective tabbed interface separating Business and Technical requirements, with a split-pane intelligence layout where the left side is for user input and the right side displays live AI suggestions. The system employs specialized agents with distinct personas and industry standards: for Business Requirements, the Strategic Analyst agent (BABOK standard) validates business objectives and alignment with corporate strategy, the UX Researcher agent (Design Thinking) ensures user personas are distinct and non-generic, the Senior Product Owner agent (INVEST criteria) enforces user stories are Independent, Negotiable, Valuable, Estimable, Small, and Testable, and the QA Engineer agent (Gherkin/SMART) ensures acceptance criteria are binary and cover edge cases. For Technical Requirements, the Solutions Architect agent (ISO 29148) analyzes system architecture for scalability and modularity, the Data Engineer agent (ACID/Data Integrity) evaluates data requirements with privacy constraints, the Security Specialist agent (OWASP/NIST) audits security and compliance, and the Site Reliability Engineer agent (SLIs/SLOs) checks performance non-functional requirements. The workflow routes input to these specialized agents based on section context, with the AgentManager class retrieving specific system prompts and querying Gemini 2.0 Flash to provide streaming feedback. The system includes a one-click export engine that extracts finalized documents into Markdown and Plain Text formats.',
      appLink: 'https://agentic-requirements-artemis-kouniakis-36f66717.koyeb.app/',
      logicalViewLink: '#',
      techDetails: {
        backend: [
          'Python',
          'FastAPI'
        ],
        frontend: [
          'React',
          'TypeScript',
          'SCSS/Sass',
        ],
        aiMl: [
          'Google Gemini 2.0 Flash — AI model for requirements analysis',
        ],
        infrastructure: [
          'Koyeb',
          'Docker',
          'Nginx',
          'Multi-stage builds'
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

