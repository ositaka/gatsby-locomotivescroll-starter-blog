/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Scroll from './locomotiveScroll'
import Header from './header'
import Author from './author'
import './layout.css'
import './locomotive-scroll.css'

// This `location` prop will serve as a callback on route change
const Layout = ({ children, location, authorImageFluid, postAuthor }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					menuLinks {
						name
						link
					}
				}
			}
		}
	`)

	return (
		<>
			<Header
				menuLinks={data.site.siteMetadata.menuLinks}
				siteTitle={data.site.siteMetadata.title}
			/>

			{/* Here we pass the callbacks to the component. Anything that impacts the innerHeight, for example: Font Loaded */}
			<Scroll callbacks={location} />

			<div
				id="container"
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `120px 1.45rem 1.0875rem 1.45rem`,
				}}
			>
				<main>{children}</main>
				<Author author={postAuthor} authorFluid={authorImageFluid} />
				<footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
