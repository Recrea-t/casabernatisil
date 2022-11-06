import React from "react"
import useSiteMetadata from "../siteMetadata"
import useTranslations from "../useTranslations"

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  StackDivider,
  Link,
} from "@chakra-ui/react"

import SocialLink from "../ui/SocialLink"
import LocalizedLink from "../ui/LocalizedLink"

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"

const Footer = props => {
  const { organization, author, social } = useSiteMetadata()
  const { home } = useTranslations()
  const { legalNote, privacyPolicy, bookingConditions, callUs, writeUs } =
    useTranslations()

  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      justify="center"
      w="full"
      p={4}
      bg="white"
      color="staleGrey.500"
      {...props}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "start" }}
        justify="center"
        w="full"
      >
        <LocalizedLink to="/" title={home} as={GatsbyLink}>
          <StaticImage
            src="../../images/LogoFooter.png"
            alt="Casa Bernat Isil"
            layout="fixed"
            placeholder="tracedSVG"
            width={200}
          />
        </LocalizedLink>

        <Box>
          <VStack spacing={2} fontSize="s" textAlign="center">
            <Text dangerouslySetInnerHTML={{ __html: organization.address }} />
            <HStack spacing={1} divider={<StackDivider />}>
              {organization.phones.map((phone, index) => (
                <Box key={index}>
                  <Link
                    href={`tel:${phone.number}`}
                    title={callUs}
                    variant="in-footer-dark"
                  >
                    {phone.title}
                  </Link>
                </Box>
              ))}
            </HStack>
            <Text>
              <Link
                href={`mailto:${organization.email}`}
                title={writeUs}
                variant="in-footer-dark"
              >
                {organization.email}
              </Link>
            </Text>
            <HStack spacing={8} color="sickGreen.500">
              <SocialLink
                color="white"
                item={social.instagram}
                icon={FaInstagram}
              />
              <SocialLink
                color="white"
                item={social.whatsapp}
                icon={FaWhatsapp}
              />
            </HStack>
          </VStack>
        </Box>
      </Flex>

      <Box mt={8}>
        <HStack spacing={2} divider={<StackDivider />} fontSize="xs">
          <Text>
            &copy; {new Date().getFullYear()} {props.title}
          </Text>
          <LocalizedLink to="/avis-legal">{legalNote}</LocalizedLink>
          <LocalizedLink to="/proteccio-de-dades">
            {privacyPolicy}
          </LocalizedLink>
          <LocalizedLink to="/condicions-de-reserva">
            {bookingConditions}
          </LocalizedLink>
          <Text>
            DISSENY:{" "}
            <Link
              href={author.url}
              title={author.description}
              isExternal
              target="_blank"
              rel="noopener"
              variant="in-footer"
            >
              {author.name}
            </Link>
          </Text>
        </HStack>
      </Box>
    </Flex>
  )
}

export default Footer
