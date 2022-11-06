import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"
import Section from "../components/sections/Section"

const ActivitiesPage = props => {
  const { frontmatter } = props.data.default

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />
      <Section {...props} />
    </>
  )
}

ActivitiesPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ActivitiesPage

export const query = graphql`
  query ActivitiesPageTemplateQuery($id: String) {
    default: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        mainTitle
        section {
          title
          description
        }
      }
    }
    images: markdownRemark(
      fields: { locale: { eq: "ca" }, templateKey: { eq: "activities-page" } }
    ) {
      frontmatter {
        hero {
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AVIF, WEBP, AUTO]
              )
            }
          }
        }
        section {
          gallery: images {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                height: 700
                aspectRatio: 0.667
                placeholder: BLURRED
                formats: [AVIF, WEBP, AUTO]
              )
            }
          }
          images {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AVIF, WEBP, AUTO]
              )
            }
          }
        }
      }
    }
  }
`
