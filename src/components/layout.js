import * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const navItems = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "About",
      url: '/about'
    },
    {
      name: "Blog",
      url: "/blog"
    }
  ]

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          {navItems.map((item, i) => (
            <li className={navLinkItem} key={i}>
              <Link className={navLinkText} to={item.url}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul> 
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout