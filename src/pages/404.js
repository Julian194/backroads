import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Ooops it's a dead end" info="">
          <AniLink fade to="/" className="btn-white">
            Back To Home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
