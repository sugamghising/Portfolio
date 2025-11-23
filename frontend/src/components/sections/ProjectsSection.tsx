import React from 'react'
import SectionTitle from '../common/SectionTitle'
import ProjectList from '../project/ProjectList'

const ProjectsSection = () => {
  return (
    <section id ="projects" className='py-20'>
        <SectionTitle>Projects</SectionTitle>
        <ProjectList />
    </section>
  )
}

export default ProjectsSection