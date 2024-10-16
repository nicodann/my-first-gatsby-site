import { Link } from 'gatsby'
import * as React from 'react'

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Home</Link>
      <p>My site my rulez.</p>
    </main>
  )
}

export const Head = () => (
  <>
    <title>About Nico Dann</title>
    <meta name="description" content="About Nico Dann web developer"/>
  </>
)

export default AboutPage