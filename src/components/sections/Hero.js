import React from "react"
import { useLocale } from "../../hooks/locale"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Container, Center, Heading, Image } from "@chakra-ui/react"

import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "../../utils/ChakraUIRenderer"

const Hero = props => {
  const { locale } = useLocale()
  const { frontmatter } = props.data.default
  const { isEmpty } = props

  if (isEmpty) {
    return <Box pos="relative" w="full" h="150px"></Box>
  }

  if (
    !props.data ||
    !props.data.images ||
    !props.data.images.frontmatter ||
    !props.data.images.frontmatter.hero
  ) {
    return (
      <Box
        pos="relative"
        w="full"
        h={["calc(75vh - 135px)", "calc(75vh - 188px)"]}
      >
        <iframe
          width="100%"
          height="100%"
          title="Google Map · Casa Bernat d'Isil"
          alt="Google Map · Casa Bernat d'Isil"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_API_KEY}&language=${locale}&q=casabernatisil&zoom=12`}
          aria-hidden="false"
          loading="lazy"
          frameborder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </Box>
    )
  }

  const { hero } = props.data.images.frontmatter

  return (
    <Box
      pos="relative"
      w="full"
      h={["calc(75vh - 135px)", "calc(75vh - 188px)"]}
    >
      <Image
        pos="absolute"
        left={0}
        top={0}
        zIndex={-10}
        as={GatsbyImage}
        loading="eager"
        image={getImage(hero.image)}
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
        <Container h="full">
          {frontmatter.hero && (
            <Center h="full" w="full" justifyContent="end">
              <Heading as="h1" variant="in-hero">
                <ReactMarkdown
                  components={ChakraUIRenderer()}
                  children={frontmatter.hero.title}
                />
              </Heading>
            </Center>
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default Hero
