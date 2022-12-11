import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import useTranslations from "../components/useTranslations"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"
import WhyCard from "../components/ui/WhyCard"
import ServiceCard from "../components/ui/ServiceCard"
import Testimonial from "../components/ui/Testimonial"

import { MotionText } from "../theme/utils"
import LocalizedLink from "../components/ui/LocalizedLink"
import Gallery from "../components/ui/Gallery"

const IndexPage = props => {
  const { frontmatter } = props.data.default
  const { spaces } = useTranslations()

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />

      <Box
        bgGradient={{
          base: "linear(to-b, sickGreen.500 70%, white 30%)",
          md: "linear(to-b, sickGreen.500 50%, white 50%)",
        }}
        color="white"
      >
        <Container variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.mainTitle}
          </Heading>
          <Text mb={4}>{frontmatter.mainDescription}</Text>
          <MotionText display="block" whileTap={{ scale: 0.95 }}>
            <LocalizedLink
              to="/casa-bernat#espais"
              variant="button"
              colorScheme="white"
            >
              {spaces}
            </LocalizedLink>
          </MotionText>
        </Container>
        <Gallery
          images={props.data.images.frontmatter}
          title="Imatge Galeria"
        />
      </Box>

      <Box bg="sickGreen.500" color="white">
        <Container mb={4} variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.whyTitle}
          </Heading>
          <SimpleGrid columns={[2, 3]} spacing={16}>
            {frontmatter.why.map((item, index) => (
              <WhyCard key={index} reason={item} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box>
        <Container mb={4} variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.servicesTitle}
          </Heading>
          <SimpleGrid columns="2" spacing={4}>
            {frontmatter.services.map((item, index) => (
              <ServiceCard key={index} service={item} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

			{frontmatter.testimonials &&
      <Box bg="lightGrey.500" color="white">
        <Container mb={4} variant="is-section">
          <Heading as="h2" variant="in-section">
            Lorem ipsum dolor sit amet
          </Heading>
          <HStack spacing={16} className="scrollable">
            <Testimonial {...props} />
            <Testimonial {...props} />
            <Testimonial {...props} />
            <Testimonial {...props} />
            <Testimonial {...props} />
          </HStack>
        </Container>
      </Box>
			}
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const query = graphql`
  query IndexPageTemplateQuery($id: String) {
    default: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        mainTitle
        hero {
          title
        }
        mainDescription
        whyTitle
        why {
          name
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                height: 78
                placeholder: TRACED_SVG
                formats: [AVIF, WEBP, AUTO]
              )
            }
          }
        }
        servicesTitle
        services {
          name
          link
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                height: 78
                placeholder: TRACED_SVG
                formats: [AVIF, WEBP, AUTO]
              )
            }
          }
          description
        }
      }
    }
    images: markdownRemark(
      fields: { locale: { eq: "ca" }, templateKey: { eq: "index-page" } }
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
    }
  }
`
