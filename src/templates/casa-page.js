import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import useTranslations from "../components/useTranslations"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Container, Stack, Image, Heading, Text } from "@chakra-ui/react"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../utils/ChakraUIRenderer"

import { MotionText } from "../theme/utils"
import LocalizedLink from "../components/ui/LocalizedLink"
import Gallery from "../components/ui/Gallery"
import Spaces from "../components/ui/Spaces"

const CasaPage = props => {
  const { frontmatter } = props.data.default
  const { whoId, historyId, spacesId, bookButton } = useTranslations()

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />

      <Box id={whoId}>
        <Container mb={4} variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.who.title}
          </Heading>
          <Stack direction={["column", "row"]} spacing={4} justify="center">
            <Box h="full" align="left">
              <ReactMarkdown
                components={ChakraUIRenderer()}
                children={frontmatter.who.description}
              />
            </Box>
            <Image
              as={GatsbyImage}
              image={getImage(props.data.images.frontmatter.who.image)}
              alt={frontmatter.who.title}
            />
          </Stack>
        </Container>
      </Box>

      <Box
        id={historyId}
        bgGradient={{
          base: "linear(to-b, lightGrey.500 70%, white 30%)",
          md: "linear(to-b, lightGrey.500 50%, white 50%)",
        }}
        color="white"
      >
        <Container variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.history.title}
          </Heading>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={frontmatter.history.description}
          />
          <MotionText display="block" whileTap={{ scale: 0.95 }}>
            <LocalizedLink to="/espais" variant="button" colorScheme="white">
              {bookButton}
            </LocalizedLink>
          </MotionText>
        </Container>
        <Gallery
          images={props.data.images.frontmatter.history}
          title="Imatge"
        />
      </Box>

      <Box>
        <Container mb={4} variant="is-section" textAlign="left">
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={frontmatter.project.description}
          />
        </Container>
      </Box>

      <Box
        id={spacesId}
        bgGradient={{
          base: "linear(to-b, sickGreen.500 70%, white 30%)",
          md: "linear(to-b, sickGreen.500 50%, white 50%)",
        }}
        color="white"
      >
        <Container variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.spaces.title}
          </Heading>
          <Text mb={4}>{frontmatter.spaces.description}</Text>
          <MotionText display="block" whileTap={{ scale: 0.95 }}>
            <LocalizedLink to="/espais" variant="button" colorScheme="white">
              {bookButton}
            </LocalizedLink>
          </MotionText>
        </Container>
        <Spaces
          links={frontmatter.spaces.images}
          images={props.data.images.frontmatter.spaces}
        />
      </Box>
    </>
  )
}

CasaPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CasaPage

export const query = graphql`
  query CasaPageTemplateQuery($id: String) {
    default: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        who {
          title
          description
        }
        history {
          title
          description
        }
        project {
          description
        }
        spaces {
          title
          description
          images {
            title
            link
          }
        }
      }
    }
    images: markdownRemark(
      fields: { locale: { eq: "ca" }, templateKey: { eq: "casa-page" } }
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
        who {
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                height: 400
                aspectRatio: 0.667
                placeholder: BLURRED
                formats: [AVIF, WEBP, AUTO]
              )
            }
          }
        }
        history {
          images {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AVIF, WEBP, AUTO]
              )
            }
          }
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
        }
        spaces {
          images {
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
          gallery: images {
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  height: 700
                  aspectRatio: 0.667
                  placeholder: BLURRED
                  formats: [AVIF, WEBP, AUTO]
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  }
`
