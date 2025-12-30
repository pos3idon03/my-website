import '@/assets/styles/_summary-section.scss'
import cvFile from '@/assets/files/Artemis Kouniakis CV.pdf'

function SummarySection() {
  const title = 'Software Quality Team Lead | AI Solutions Architect | Finance Expert'
  const bio = 'I am an AI architect and leader with advanced knowledge across Software Engineering and Finance. My career is defined by a "doer" mentality and a rapid professional trajectory, moving from Junior to Team Lead roles by consistently delivering high-impact results. I specialize in bridging the gap between complex technical solutions and tangible business growth'
  const cvPath = cvFile

  return (
    <div className="summary-section">
      <h2 className="title">{title}</h2>
      <p className="bio">{bio}</p>
      <a href={cvPath} download className="cv-button">
        Download CV
      </a>
    </div>
  )
}

export default SummarySection

