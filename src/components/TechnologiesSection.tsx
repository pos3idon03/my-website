import '@/assets/styles/_technologies-section.scss'
import '@/assets/styles/_section-titles.scss'

interface TechCategory {
  name: string
  technologies: string[]
}

function TechnologiesSection() {
  const categories: TechCategory[] = [
    {
      name: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL']
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'Go', 'Rust']
    },
    {
      name: 'Frontend',
      technologies: ['Vue.js', 'React', 'TypeScript', 'HTML5', 'CSS3']
    },
    {
      name: 'AI',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain']
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

