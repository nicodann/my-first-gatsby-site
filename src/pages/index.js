import { Link } from "gatsby"
import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <h1>
        Welcome to my site!
      </h1>
      <Link to="/about">About</Link>
      <p>
        I'm making this following a tutorial.
      </p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
