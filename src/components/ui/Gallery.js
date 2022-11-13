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

const Gallery = props => {
  const { title } = props
  const { gallery, images } = props.images
  const [currentImage, setCurrentImage] = React.useState(images[1])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const settings = {
    className: "is-slider",
    arrows: false,
    dots: false,
    infinite: true,
    fade: false,
    autoplay: false,
    swipe: true,
    variableWidth: true,
    rows: 1,
  }

  const openModal = index => {
    onOpen()
    setCurrentImage(images[index])
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
      <Slider {...settings} align="center">
        {gallery.map((image, index) => (
          <Box onClick={() => openModal(index)} cursor="pointer">
            <Image
              mr={8}
              key={index}
              as={GatsbyImage}
              loading={index === 0 ? "eager" : "lazy"}
              image={getImage(image)}
              alt={title}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Gallery
