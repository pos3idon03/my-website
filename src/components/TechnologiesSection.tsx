import '@/assets/styles/_technologies-section.scss'
import '@/assets/styles/_section-titles.scss'

interface TechCategory {
  name: string
  technologies: string[]
}

function TechnologiesSection() {
  const categories: TechCategory[] = [
    {
      name: 'Languages',
      technologies: ['Python', 'C#', "R", 'TypeScript', 'Javascript', 'SQL', 'NoSQL']
    },
    {
      name: 'LLM Tech',
      technologies: ['LangChain', 'Qdrant', 'ChromaDB', 'Ollama', 'OpenAI API', 'Vertex AI', 'TensorFlow', 'Google AI Studio']
    },
    {
      name: 'Tech Infrastructure',
      technologies: ['Docker', 'Kubernetes', 'Azure', 'AWS', 'Google Cloud']
    },
    {
      name: 'Mathematics',
      technologies: ['Quantitative Finance', 'Monte Carlo Simulations', 'Linear Algebra', 'Stochastic Calculus']
    },
    {
      name: 'Other Skills',
      technologies: ['Build AI Agents', 'Build RAG\'s', 'Build Software Solutions']
    }
  ]

  return (
    <div className="technologies-section">
      <h2 className="section-title">Technologies</h2>
      <div className="tech-categories">
        {categories.map((category) => (
          <div key={category.name} className="tech-category">
            <h3 className="category-title">{category.name}</h3>
            <div className="tech-items">
              {category.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnologiesSection

