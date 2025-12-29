import SummarySection from '@/components/SummarySection'
import TechnologiesSection from '@/components/TechnologiesSection'
import AppsGrid from '@/components/AppsGrid'
import ContactForm from '@/components/ContactForm'
import SocialLinks from '@/components/SocialLinks'
import '@/assets/styles/_home.scss'

function Home() {
  return (
    <div className="home">
      {/* Top Section: 2x1 Grid */}
      <section className="top-section">
        <h2 className="section-title">Hello 👋 I'm Artemis Kouniakis</h2>
        <div className="top-section-content">
          <SummarySection />
          <TechnologiesSection />
        </div>
      </section>

      {/* Middle Section: 2x2 Grid */}
      <section className="middle-section">
        <h2 className="section-title">My Projects</h2>
        <AppsGrid />
      </section>

      {/* Bottom Section: 2x1 Grid */}
      <section className="bottom-section">
        <h2 className="section-title">Send me a message</h2>
        <div className="bottom-section-content">
          <ContactForm />
          <SocialLinks />
        </div>
      </section>
    </div>
  )
}

export default Home

