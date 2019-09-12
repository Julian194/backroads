import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={data.blogBg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  )
}

export const getImage = graphql`
  query blogBg {
    blogBg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
