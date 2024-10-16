import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>My site my rulez.</p>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="About Nico Dann" metaDescription="About Nico Dann web developer" />
)

export default AboutPage