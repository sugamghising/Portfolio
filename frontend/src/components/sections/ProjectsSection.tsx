import SectionTitle from '../common/SectionTitle'
import ProjectList from '../project/ProjectList'

const ProjectsSection = () => {
  return (
    <section id="projects" className='py-20 animate-in fade-in slide-in-from-bottom-4 duration-700'>
        <SectionTitle>Projects</SectionTitle>
        <ProjectList />
    </section>
  )
}

export default ProjectsSection