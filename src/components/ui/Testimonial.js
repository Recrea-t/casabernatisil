import React from "react"

import { VStack, HStack, Text, Image } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TriangleDownIcon } from "@chakra-ui/icons"

const Testimonial = props => {
  const { testimonial } = props
  const { hero } = props.data.images.frontmatter

  return (
    <VStack
      p={4}
      bg="transparent"
      spacing={1}
      justifyContent="space-between"
      textAlign="left"
      color="staleGrey.500"
    >
      <Text
        bg="white"
        borderRadius="2xl"
        p={4}
        minH="310px"
        minW="310px"
        pos="relative"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        elementum ipsum nulla, nec iaculis purus consequat et. Donec nunc
        <TriangleDownIcon
          w={8}
          h={8}
          color="white"
          pos="absolute"
          bottom={-6}
          left="70px"
        />
      </Text>
      <HStack w="full" pt={6} ps={2} spacing={2}>
        <Image
          borderRadius="full"
          boxSize="150px"
          alignSelf="baseline"
          as={GatsbyImage}
          image={getImage(hero)}
          //alt={frontmatter.description}
        />
        <VStack spacing={1} textAlign="left">
          <Text w="full" textTransform="uppercase">
            Nom
          </Text>
          <Text w="full">Ciutat, CAT</Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Testimonial
