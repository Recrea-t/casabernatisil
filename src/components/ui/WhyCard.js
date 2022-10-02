import React, { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Heading, Image } from "@chakra-ui/react"
import { motionRevealConfig, MotionVStack } from "../../theme/utils"

const WhyCard = props => {
  const { reason } = props
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
        image={getImage(reason.image)}
        alt={reason.name}
      />
      <Heading as="h3" fontWeight="bold" fontSize="base" mb={0}>
        {reason.name}
      </Heading>
    </MotionVStack>
  )
}

export default WhyCard
