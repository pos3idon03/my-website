import '@/assets/styles/_skills-card.scss'

interface SkillsCardProps {
  title: string
  content: string[]
}

function SkillsCard({ title, content }: SkillsCardProps) {
  return (
    <div className="skills-card">
      <h3 className="skills-card-title">{title}</h3>
      <div className="skills-card-content">
        {content.map((paragraph, index) => (
          <p key={index} className="skills-card-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="real-world-example">
        <h4 className="real-world-example-title">Real World Example</h4>
        <p className="real-world-example-placeholder">
          {/* Placeholder for real world example */}
        </p>
      </div>
    </div>
  )
}

export default SkillsCard

