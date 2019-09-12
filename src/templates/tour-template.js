import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/template.module.css"
import Image from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import StyledHero from "../components/StyledHero"
import Day from "../components/SingleTour/Day"
import SEO from "../components/SEO"

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour

  const [mainImage, ...tourImages] = images
  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt={name}
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </ul>
          <AniLink fade to="/tours" className="btn-primary">
            {" "}
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      start(formatString: "dddd MMMM Do, YYYY")
      days
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      description {
        description
      }
    }
  }
`

export default TourTemplate
