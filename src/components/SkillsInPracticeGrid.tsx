import SkillsCard from './SkillsCard'
import '@/assets/styles/_skills-in-practice-grid.scss'

interface Skill {
  title: string
  content: string[]
  realWorldExample?: string[]
}

function SkillsInPracticeGrid() {
  const skills: Skill[] = [
    {
      title: 'Strategic Leadership & Business Acumen',
      content: [
        'Team Management: Directing multidisciplinary teams to deliver enterprise-grade solutions.',
        'Growth Delivery: Proven track record of increasing annual revenue through strategic management of banking and telecom portfolios.',
        'Product Leadership: Guiding the lifecycle of technical products from conception to delivery.'
      ],
      realWorldExample: [
        'I promoted from Junior position to Team Leadership of 4 consultant in 4 years that consist of DevOps, Devs, Security and Software Quality Consultants.',
        'As Team Leader I increased the portfolio of the company by 2 clients (total 7), performed multiple PoC\'s, Due Diligences and presented to C-level people impactful reports related to the Software Landscape on organization level.',
        'My Team and me as a Team Leader has build an Internal BI that help us to automate the monthly reporting to our clients, build a solution that performs repository analysis to git history to provide activity, productivity and vendor management insights and a RAG solution as internar knowldge base.'
      ]
    },
    {
      title: 'AI & Technical Innovation',
      content: [
        'Applied Solutions: Architecting and developing RAG-based knowledge systems, Agentic AI, and LLM-powered productivity tools.',
        'Modern Development: Expert use of AI libraries and frameworks to build and modernize applications.',
        'Emerging Tech: Continuous integration of Generative AI and Google AI Essentials into practical business workflows'
      ],
      realWorldExample: [
        'Build a RAG knowledge base for internal use using the documentation created internaly from Confluence or other sources. Utilized Ollama, Qdrant and OpenWeUi to build the RAG solution.',
        'Create a software solution to perform AI code reviews with multiple personas per commit ready to be deployed to our customers infrastucture. Utilized internal LLMs to perform the code reviews using Ollama.',
        'Create personal Agentic AI projects for Stock Recommendations, Business and Technical Requirements creation. Utilized CrewAI, LangChain, Tavilty, Gemini LLM models from Google AI Studio and Alpha Vantage MCP integration layer to build the Agentic AI solutions.'
      ]
    },
    {
      title: 'Methodology & Quality Standards',
      content: [
        'Process Excellence: Implementing Shift Left SDLC practices to prioritize quality early in the development cycle',
        'Technical Standards: Driving excellence through ISO 25010 maintainability standards and IT Due Diligence.',
        'Agile Frameworks: Utilizing ICAgile professional standards to ensure flexible and efficient project execution'
      ],
      realWorldExample: [
        'I have performed numerous calls with development teams to cover Maintainability, Security and Architecture issues on development phase to avoid potential bugs, incidents or issues on production.',
        'Performed as Lead Consultant 6 Due Diligence reports  (AI and non AI related products) based on ISO 25010 and other standars derived from SIG. These reports used from the stakeholders of the deal to identify potential risks on the asset itself.',
        'I have acted as the Business and Technical Product Owner for all the software solutions built internally.',
        'I have performed projects from scratch related to Enterprise Architecture Mapping for Insurance Companies and other types of vanilla projects that cover customer specific needs.'
      ]
    },
    {
      title: 'Quantitative & Financial Foundation',
      content: [
        'Advanced Analysis: Utilizing a Master of Science in Quantitative Finance to perform complex stochastic modelling and data analysis.',
        'Corporate Finance: Preparation of consolidated financial statements, yearly budgets, and management reporting for C-suite executives.',
        'Transaction Services: Conducting Financial Due Diligence and statutory audits for consumer and pharma industries.'
      ],
      realWorldExample: [
        'I have acted as External Financial Statutory Auditor to numerous public and private companies as part of PwC teams auditing the Financial Statements in detail.',
        'I have studied Economics in Greece and Quantitative Finance in Glasgow which provided to me an strong background in Matehmatics and Statistics.',
        'I have acted as Financial Analyst who was responsible for the Budget, Forecast and Monthly Management Report for Genesis Pharma (200million Revenue).',
        'I have acted as Financial Consultant to multiple Due Diligence Financial Reports in PwC for large organizations.'
      ]
    }
  ]

  return (
    <div className="skills-in-practice-grid">
      {skills.map((skill) => (
        <SkillsCard key={skill.title} title={skill.title} content={skill.content} realWorldExample={skill.realWorldExample} />
      ))}
    </div>
  )
}

export default SkillsInPracticeGrid

