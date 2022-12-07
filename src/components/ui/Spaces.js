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
  useBreakpointValue,
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

  const settings = useBreakpointValue([
    {
      className: "is-slider",
      arrows: false,
      dots: true,
      infinite: true,
      fade: false,
      autoplay: false,
      swipe: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
    },
    {
      className: "is-slider",
      arrows: false,
      dots: false,
      infinite: false,
      fade: false,
      autoplay: false,
      speed: 500,
      swipe: false,
      variableWidth: true,
      slidesToShow: 3,
      rows: 1,
    },
  ])

  const openModal = index => {
    onOpen()
    setCurrentImage(images[index])
  }

  return (
    <Box my={8} ms={8}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton zIndex="2" size="lg" color="white" />
          <Image as={GatsbyImage} image={getImage(currentImage)} alt={title} />
        </ModalContent>
      </Modal>
      <Slider
        {...settings}
        h="full"
        align="center"
        className="is-slider spaces"
      >
        {gallery.map((image, index) => (
          <Box key={index} position="relative" textAlign="center">
            <Box onClick={() => openModal(index)} cursor="pointer">
              <Image
                mr={8}
                h="full"
                as={GatsbyImage}
                loading={index === 0 ? "eager" : "lazy"}
                image={getImage(image.image)}
                alt={links[index].title}
              />
            </Box>
            <Box
              pr={8}
              w="full"
              textAlign="center"
              position="absolute"
              bottom={[12, 8]}
            >
              <LocalizedLink
                to={links[index].link}
                variant="button"
                colorScheme="sickGreen"
              >
                {links[index].title}
              </LocalizedLink>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Spaces
