import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog">
      <p>My cool blog posts will go here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage