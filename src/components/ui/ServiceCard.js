import React, { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import LocalizedLink from "./LocalizedLink"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Text, Heading, Image } from "@chakra-ui/react"
import { motionRevealConfig, MotionText, MotionVStack } from "../../theme/utils"

import useTranslations from "../useTranslations"

const ServiceCard = props => {
  const { service } = props
  const { moreButton } = useTranslations()
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <MotionVStack
      ref={ref}
      p={4}
      bg="transparent"
      spacing={4}
      textAlign="center"
      justifyContent="space-between"
      {...motionRevealConfig(controls)}
    >
      <Image
        as={GatsbyImage}
        image={getImage(service.image)}
        alt={service.name}
      />
      <Heading
        as="h3"
        fontWeight="bold"
        color="sickGreen.500"
        fontSize="base"
        mb={0}
      >
        {service.name}
      </Heading>
      <Text>{service.description}</Text>
      <MotionText display="block" whileTap={{ scale: 0.95 }}>
        <LocalizedLink
          to="/activitats"
          variant="button"
          colorScheme="sickGreen"
        >
          {moreButton}
        </LocalizedLink>
      </MotionText>
    </MotionVStack>
  )
}

export default ServiceCard
