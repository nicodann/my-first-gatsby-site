import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>My site my rulez.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About Nico Dann</title>
    <meta name="description" content="About Nico Dann web developer"/>
  </>
)

export default AboutPage