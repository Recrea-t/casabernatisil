import React from "react"

import { Box, Container, Heading } from "@chakra-ui/react"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../../utils/ChakraUIRenderer"

import Gallery from "../ui/Gallery"

const Section = props => {
  const { frontmatter } = props.data.default

  return (
    <Box>
      <Container variant="is-section">
        <Heading as="h2" variant="in-section">
          {frontmatter.section.title}
        </Heading>
        <Box textAlign="left" className="markdown">
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={frontmatter.section.description}
          />
        </Box>
      </Container>
      <Gallery images={props.data.images.frontmatter.section} title="Imatge" />
      {frontmatter.section.details && (
        <Container variant="is-section">
          <Box textAlign="left" className="markdown">
            <ReactMarkdown
              components={ChakraUIRenderer()}
              children={frontmatter.section.details}
            />
          </Box>
        </Container>
      )}
    </Box>
  )
}

export default Section
