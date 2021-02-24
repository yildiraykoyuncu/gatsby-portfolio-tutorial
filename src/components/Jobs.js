import React from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        position
        strapiId
      }
    }
  }
`

const Jobs = () => {

  const {allStrapiJobs:{nodes:jobs}} = useStaticQuery(query)
  const [value, setValue] = React.useState(0)
  const {company, date, desc, position} = jobs[value]

  console.log(jobs);
  console.log(company, date, desc, position);


  return (
    <section className="section jobs">
      <Title title="experience"/>
      <div className="jobs-center">
        <div className="btn-container">
              {jobs.map((item, index)=>{
                return <button 
                key={item.strapiId} 
                className={`job-btn ${index === value && "active-btn"}`} 
                onClick={()=> {setValue(index)}}>
                {item.company}
                </button>
              })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            desc.map(item =>{
              return <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>

            })
          }
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )

  
}

export default Jobs
