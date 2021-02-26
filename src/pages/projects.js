import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"


const ProjectsPage = ({data}) => {
   const {allStrapiProjects:{nodes: projects}} = data

  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
      
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        github
        description
        title
        strapiId
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`

export default ProjectsPage
