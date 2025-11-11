import Achievement from "@/sanity/schemaTypes/achievement"
import Contact from "@/sanity/schemaTypes/contact"
import Experience from "@/sanity/schemaTypes/experience"
import Project from "@/sanity/schemaTypes/project"
import Testimonial from "@/sanity/schemaTypes/testimonial"

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      {/* <AboutSection />
      <TestimonialsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection /> */}
    </>
  )
}

export default PortfolioContent