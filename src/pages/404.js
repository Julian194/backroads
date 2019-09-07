import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Ooops it's a dead end" info="">
          <Link to="/" className="btn-white">
            Back To Home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
