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
        <Container mb={4} variant="is-section">
          <Heading as="h2" variant="in-section">
            Lorem ipsum dolor sit amet
          </Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            elementum ipsum nulla, nec iaculis purus consequat et. Donec nunc
            mi, facilisis ac ex congue, convallis rhoncus elit. Etiam ex ipsum,
            blandit sed porttitor sit amet, tincidunt ut massa. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus rhoncus ut eros ut imperdiet. Praesent
            fringilla nibh viverra, tincidunt nisl et, pretium tellus. Nunc
            vitae efficitur lectus. Maecenas id lacus nec risus blandit
            sollicitudin. Morbi at erat congue, rutrum odio nec, dapibus elit.
            Aliquam facilisis mauris at mollis tristique. Morbi vel arcu in nisl
            pulvinar feugiat.
          </Text>
          <MotionText display="block" whileTap={{ scale: 0.95 }}>
            <LocalizedLink to="/espais" variant="button" colorScheme="white">
              {spaces}
            </LocalizedLink>
          </MotionText>
          <Gallery
            images={props.data.images.frontmatter.images}
            title="Imatge"
          />
        </Container>
      </Box>

      <Box bg="sickGreen.500" color="white">
        <Container mb={4} variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.whyTitle}
          </Heading>
          <SimpleGrid columns="2" spacing={16}>
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
          <SimpleGrid columns="2" spacing={16}>
            {frontmatter.services.map((item, index) => (
              <ServiceCard key={index} service={item} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

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
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AVIF, WEBP, AUTO]
            )
          }
        }
        images {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 500
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
