import React from "react"
import styles from "../../css/about.module.css"
import Title from "../Title"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const queryAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(queryAboutImage)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"></Title>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Image
              fluid={aboutImage.childImageSharp.fluid}
              alt="about our company"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            doloremque tempore ipsum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            doloremque tempore ipsum?
          </p>
          <button type="button" className="btn-primary">
            {" "}
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
