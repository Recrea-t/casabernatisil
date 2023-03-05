import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Box, Container, Heading } from "@chakra-ui/react"

import SEO from "../components/SEO/seo"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../utils/ChakraUIRenderer"
import Hero from "../components/sections/Hero"
import ContactForm from "../components/ui/ContactForm"

const ContactPage = props => {
  const { frontmatter } = props.data.default

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />
      <Box>
        <Container variant="is-section" mb={4}>
          <Heading as="h2" variant="in-section">
            {frontmatter.title}
          </Heading>
          <ReactMarkdown
            linkTarget="_blank"
            components={ChakraUIRenderer()}
            children={frontmatter.summary}
          />

          <ContactForm />
        </Container>
      </Box>
    </>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const query = graphql`
  query ContactPageTemplateQuery($id: String) {
    default: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        summary
      }
    }
  }
`
