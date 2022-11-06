import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import useTranslations from "../components/useTranslations"

import { Box, Container, Heading } from "@chakra-ui/react"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../utils/ChakraUIRenderer"

import { MotionText } from "../theme/utils"
import LocalizedLink from "../components/ui/LocalizedLink"
import Gallery from "../components/ui/Gallery"

const SectionPage = props => {
  const { frontmatter } = props.data.default
  const { spaces } = useTranslations()

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />

      <Box>
        <Container variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.section.title}
          </Heading>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={frontmatter.section.description}
          />
        </Container>
        <Gallery
          images={props.data.images.frontmatter.section}
          title="Imatge"
        />
      </Box>
    </>
  )
}

SectionPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SectionPage

export const query = graphql`
  query SectionPageTemplateQuery($id: String) {
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
      fields: { locale: { eq: "ca" }, templateKey: { eq: "section-page" } }
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
