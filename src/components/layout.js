import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
container,
heading,
navLinks,
navLinkItem,    
navLinkText,
siteTitle
} from "./layout.module.css"

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

    return (
        <div className={container}>
            <title>{data.site.siteMetadata.title}</title>
            <h2 className={heading}>{pageTitle}</h2>
            <nav>
                <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout