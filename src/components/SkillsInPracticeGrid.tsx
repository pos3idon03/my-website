import SkillsCard from './SkillsCard'
import '@/assets/styles/_skills-in-practice-grid.scss'

interface Skill {
  title: string
  content: string[]
}

function SkillsInPracticeGrid() {
  const skills: Skill[] = [
    {
      title: 'Strategic Leadership & Business Acumen',
      content: [
        'Team Management: Directing multidisciplinary teams to deliver enterprise-grade solutions.',
        'Growth Delivery: Proven track record of increasing annual revenue through strategic management of banking and telecom portfolios.',
        'Product Leadership: Guiding the lifecycle of technical products from conception to delivery.'
      ]
    },
    {
      title: 'AI & Technical Innovation',
      content: [
        'Applied Solutions: Architecting and developing RAG-based knowledge systems, Agentic AI, and LLM-powered productivity tools.',
        'Modern Development: Expert use of AI libraries and frameworks to build and modernize applications.',
        'Emerging Tech: Continuous integration of Generative AI and Google AI Essentials into practical business workflows'
      ]
    },
    {
      title: 'Methodology & Quality Standards',
      content: [
        'Process Excellence: Implementing Shift Left SDLC practices to prioritize quality early in the development cycle',
        'Technical Standards: Driving excellence through ISO 25010 maintainability standards and IT Due Diligence.',
        'Agile Frameworks: Utilizing ICAgile professional standards to ensure flexible and efficient project execution'
      ]
    },
    {
      title: 'Quantitative & Financial Foundation',
      content: [
        'Advanced Analysis: Utilizing a Master of Science in Quantitative Finance to perform complex stochastic modelling and data analysis.',
        'Corporate Finance: Preparation of consolidated financial statements, yearly budgets, and management reporting for C-suite executives.',
        'Transaction Services: Conducting Financial Due Diligence and statutory audits for consumer and pharma industries.'
      ]
    }
  ]

  return (
    <div className="skills-in-practice-grid">
      {skills.map((skill) => (
        <SkillsCard key={skill.title} title={skill.title} content={skill.content} />
      ))}
    </div>
  )
}

export default SkillsInPracticeGrid

