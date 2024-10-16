import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, metaDescription }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`)

    return (
      <>
        <title>{title} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={metaDescription ? metaDescription : "Nico Dann Web Developer Toronto Canada Full Stack"} />
      </>
    )
}

export default Seo
