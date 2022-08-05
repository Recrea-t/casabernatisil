import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Container, Heading, Image } from "@chakra-ui/react"

const Hero = props => {
  const { frontmatter } = props.data.default
  const { hero } = props.data.images.frontmatter
  const { isEmpty } = props

  if (isEmpty) {
    return <Box pos="relative" w="full" h="150px"></Box>
  }

  return (
    <Box pos="relative" w="full" h="calc(50vh - 135px)">
      <Image
        pos="absolute"
        left={0}
        top={0}
        zIndex={-10}
        as={GatsbyImage}
        loading="eager"
        image={getImage(hero)}
        alt={frontmatter.description}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        pos="absolute"
        bottom="calc(50% - 1.37rem)"
        w="full"
        top="0"
        h="full"
      >
        {" "}
        <Container textAlign="right" pos="relative" h="full">
          <Heading
            as="h1"
            variant="in-hero"
            maxW={250}
            pos="absolute"
            top="30%"
            right="0"
          >
            {frontmatter.description}
          </Heading>
        </Container>
      </Box>
    </Box>
  )
}

export default Hero
