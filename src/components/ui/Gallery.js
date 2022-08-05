import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Image } from "@chakra-ui/react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Gallery = props => {
  const { images, title } = props

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

  return (
    <Box h={500} mt={8} ms={{ base: 0, lg: 8 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Image
            mr={8}
            key={index}
            as={GatsbyImage}
            loading={index === 0 ? "eager" : "lazy"}
            image={getImage(image)}
            alt={title}
          />
        ))}
      </Slider>
    </Box>
  )
}

export default Gallery
