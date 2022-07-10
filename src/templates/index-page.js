import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import {
  Container,
  Image,
  Flex,
  Text,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SEO from "../components/SEO/seo"
//import Hero from "../components/sections/Hero"

import SocialLink from "../components/ui/SocialLink"

import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"

import useSiteMetadata from "../components/siteMetadata"

const IndexPage = props => {
  const { frontmatter } = props.data.markdownRemark
  const { organization, social } = useSiteMetadata()

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Container my={8} align="center" justify="center">
        <Image
          as={GatsbyImage}
          image={getImage(frontmatter.logo)}
          alt="Casa Bernat Isil"
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        <HStack
          justify="space-around"
          alignItems="center"
          textAlign="center"
          mb={{ base: 0, lg: 4 }}
          px={{ base: 0, lg: 4 }}
        >
          <SocialLink item={social.instagram} icon={FaInstagram} />
        </HStack>

        <Flex
          w="full"
          direction={{ base: "column", lg: "row" }}
          justify="space-around"
          alignItems="center"
          textAlign="center"
          mb={{ base: 0, lg: 4 }}
          px={{ base: 0, lg: 4 }}
        >
          <HStack>
            <Icon as={FaEnvelope} h={4} w={4} />
            <Text>
              <Link
                href={`mailto:${organization.email}`}
                title="Escriu-nos"
                isExternal
              >
                {organization.email}
              </Link>
            </Text>
          </HStack>
          <HStack>
            <Icon as={FaPhoneAlt} h={4} w={4} />
            <Text>
              <Link
                href={`tel:${organization.phone.number}`}
                title="Truca'ns"
                isExternal
              >
                {organization.phone.title}
              </Link>
            </Text>
          </HStack>
          <HStack>
            <Icon as={FaMapMarkerAlt} h={4} w={4} />
            <Text>
              <Link
                href="https://www.google.com/maps/place/Plaça+de+la+Casalta,+8,+25586+Isil,+Lleida/@42.6790139,1.084696,17z/data=!3m1!4b1!4m5!3m4!1s0x12a8afb9e6612663:0xc5d6dd67b088c96f!8m2!3d42.67901!4d1.08689?hl=ca"
                title="On som?"
                isExternal
              >
                {organization.address}
              </Link>
            </Text>
          </HStack>
        </Flex>
      </Container>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const query = graphql`
  query IndexPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        logo {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AVIF, WEBP, AUTO]
            )
          }
        }
      }
    }
  }
`
