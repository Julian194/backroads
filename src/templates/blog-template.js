import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img
            width="400"
            src={node.data.target.fields.file["en-US"].url}
            alt=""
          />
        )
      },
      //   "embedded-entry-block": node => {
      //     console.log("ffjf", node.data.target.field)

      //     return (
      //       <div>
      //         <br />
      //       </div>
      //     )
      //   },
    },
  }

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            {" "}
            All posts{" "}
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published
      text {
        json
      }
    }
  }
`

export default Blog
