import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog">
      <ul>
        {data.allFile.nodes.map((node, i) => (          
            <li key={i}>
              {node.name}
            </li>
          )
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name,
        sourceInstanceName
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage