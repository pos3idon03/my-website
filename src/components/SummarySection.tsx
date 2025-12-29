import '@/assets/styles/_summary-section.scss'
import cvFile from '@/assets/files/Artemis Kouniakis CV.pdf'

function SummarySection() {
  const name = 'Your Name'
  const title = 'Your Professional Title'
  const bio = 'A brief summary about yourself, your experience, and what you do. This section can be customized with your personal information.'
  const cvPath = cvFile

  return (
    <div className="summary-section">
      <h1 className="name">{name}</h1>
      <h2 className="title">{title}</h2>
      <p className="bio">{bio}</p>
      <a href={cvPath} download className="cv-button">
        Download CV
      </a>
    </div>
  )
}

export default SummarySection

