import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"
import Section from "../components/sections/Section"
import useTranslations from "../components/useTranslations"

const RoomsPage = props => {
  const { frontmatter } = props.data.default
  const { areas, exteriors } = useTranslations()

  const links = [
    {
      to: "/zones-comuns",
      textButton: areas,
    },
    {
      to: "/exteriors",
      textButton: exteriors,
    },
  ]

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />
      <Section {...props} section="rooms" links={links} />
    </>
  )
}

RoomsPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default RoomsPage

export const query = graphql`
  query RoomsPageTemplateQuery($id: String) {
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
          details
        }
      }
    }
    images: markdownRemark(
      fields: { locale: { eq: "ca" }, templateKey: { eq: "rooms-page" } }
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
          gallery: rooms {
            alt
            image {
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
          }
          images: rooms {
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
        }
      }
    }
  }
`
