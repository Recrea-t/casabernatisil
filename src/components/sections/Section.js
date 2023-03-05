import React from "react"

import { Box, Container, Heading, HStack } from "@chakra-ui/react"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../../utils/ChakraUIRenderer"

import Gallery from "../ui/Gallery"
import { MotionText } from "../../theme/utils"
import LocalizedLink from "../ui/LocalizedLink"

const Section = props => {
  const { frontmatter } = props.data.default

  return (
    <Box>
      <Container variant="is-section">
        <Heading as="h2" variant="in-section">
          {frontmatter.section.title}
        </Heading>
				{props.links && (
					<HStack mb={8} spacing={8} justify="center">
						{props.links.map((item, index) => (
							<MotionText display="block" whileTap={{ scale: 0.95 }} key={index}>
								<LocalizedLink to={item.to} variant="button" colorScheme="sickGreen">
									{item.textButton}
								</LocalizedLink>
							</MotionText>
						))}
					</HStack>
				)}
        <Box textAlign="left" className="markdown">
          <ReactMarkdown
            linkTarget="_blank"
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
							linkTarget="_blank"
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
