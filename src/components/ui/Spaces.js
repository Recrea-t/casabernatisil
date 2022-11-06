import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import LocalizedLink from "./LocalizedLink"

const Spaces = props => {
  const { title, links } = props
  const { gallery, images } = props.images
  const [currentImage, setCurrentImage] = React.useState(images[1])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const settings = {
    className: "is-slider",
    arrows: false,
    dots: false,
    infinite: false,
    fade: false,
    autoplay: false,
    speed: 500,
    swipe: true,
    variableWidth: true,
    rows: 1,
  }

  const openModal = index => {
    onOpen()
    setCurrentImage(images[index])
    console.log(currentImage)
  }

  return (
    <Box h={700} my={8} ms={8}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton zIndex="2" size="lg" color="white" />
          <Image as={GatsbyImage} image={getImage(currentImage)} alt={title} />
        </ModalContent>
      </Modal>
      <Slider {...settings}>
        {gallery.map((image, index) => (
          <Box key={index} position="relative">
            <Box onClick={() => openModal(index)} cursor="pointer">
              <Image
                mr={8}
                as={GatsbyImage}
                loading={index === 0 ? "eager" : "lazy"}
                image={getImage(image.image)}
                alt={links[index].title}
              />
            </Box>
            <LocalizedLink
              to={links[index].link}
              variant="button"
              colorScheme="sickGreen"
              width="150px"
              textAlign="center"
              position="absolute"
              bottom={8}
              right="calc(50% - 75px + 2rem)"
            >
              {links[index].title}
            </LocalizedLink>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Spaces
