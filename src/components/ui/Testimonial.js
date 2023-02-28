import React from "react"

import { VStack, HStack, Text, Image } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TriangleDownIcon } from "@chakra-ui/icons"

const Testimonial = props => {
  const { testimonial } = props

  return (
    <VStack
      p={4}
      bg="transparent"
      spacing={1}
      justifyContent="space-between"
      textAlign="left"
      alignItems="left"
      color="staleGrey.500"
      w="418px"
      minW={["75%", "50%"]}
    >
      <Text
        bg="white"
        borderRadius="2xl"
        p={4}
        pos="relative"
        minH={["250px", "310px"]}
      >
        {testimonial.Summary}
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
        {testimonial.image && (
          <Image
            borderRadius="full"
            boxSize="150px"
            alignSelf="baseline"
            as={GatsbyImage}
            image={getImage(testimonial.image)}
            alt={testimonial.name}
          />
        )}
        <VStack spacing={1} textAlign="left">
          <Text w="full" textTransform="uppercase">
            {testimonial.name}
          </Text>
          <Text w="full">{testimonial.place}</Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Testimonial
