import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Box,
  Image,
  Modal,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
  VStack,
  Text,
} from "@chakra-ui/react"

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const RoomsGallery = props => {
  const { title } = props
  const { gallery, images } = props.images
  const [currentImage, setCurrentImage] = React.useState(images[1])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const settings = useBreakpointValue([
    {
      className: "is-slider",
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: false,
      swipe: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
    },
    {
      className: "is-slider",
      arrows: true,
      dots: false,
      infinite: true,
      fade: false,
      autoplay: false,
      swipe: false,
      slidesToScroll: 1,
      variableWidth: true,
      rows: 1,
      prevArrow: (
        <IconButton
          zIndex="2"
          size="sm"
          colorScheme="sickGreen"
          aria-label="Previous Picture"
        >
          <ChevronLeftIcon boxSize={8} />
        </IconButton>
      ),
      nextArrow: (
        <IconButton
          zIndex="2"
          size="sm"
          colorScheme="sickGreen"
          aria-label="Next Picture"
        >
          <ChevronRightIcon boxSize={8} />
        </IconButton>
      ),
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
      <Slider {...settings} h="full">
        {gallery.map((image, index) => (
          <VStack onClick={() => openModal(index)} cursor="pointer" key={index}>
            <Image
              mr={8}
              h="full"
              objectFit="contain"
              key={index}
              as={GatsbyImage}
              loading={index === 0 ? "eager" : "lazy"}
              image={getImage(image.image)}
              alt={image.alt || title}
            />
            {image.alt && (
              <Text color="staleGrey.500" fontStyle="italic">
                {image.alt}
              </Text>
            )}
          </VStack>
        ))}
      </Slider>
    </Box>
  )
}

export default RoomsGallery
