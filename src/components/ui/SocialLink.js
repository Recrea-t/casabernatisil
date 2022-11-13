import React from "react"
import { Icon } from "@chakra-ui/react"
import { MotionLink } from "../../theme/utils"

const SocialLink = props => {
  const { item, icon } = props
  return (
    <MotionLink
      href={`${item.baseUrl}${item.username}`}
      title={item.title}
      target="_blank"
      rel="noopener"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon as={icon} h={[8, 4]} w={[8, 4]} />
    </MotionLink>
  )
}

export default SocialLink
