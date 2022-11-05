import React from "react"
import useMenu from "../useMenu"
import useSiteMetadata from "../siteMetadata"
import useTranslations from "../useTranslations"

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Flex, Box, Link, useDisclosure, VStack } from "@chakra-ui/react"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import NavLink from "../ui/NavLink"
import Languages from "../ui/Languages"
import SocialLink from "../ui/SocialLink"
import LocalizedLink from "../ui/LocalizedLink"

import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"

const Header = () => {
  const menuItems = useMenu()
  const { social } = useSiteMetadata()
  const { home, menuTitle } = useTranslations()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isMenuOpen, onMenuClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box
      as="nav"
      w="full"
      h="135px"
      pos={{ base: "fixed", lg: "inherit" }}
      top="0"
      right="0"
      left="0"
      zIndex="1"
      color="white"
      bg="sickGreen.500"
      borderBottom="2px solid white"
    >
      <Flex
        h="full"
        w="full"
        maxW="1200px"
        align="center"
        justify="space-between"
        mx="auto"
        p={4}
        wrap="wrap"
      >
        <LocalizedLink
          to="/"
          title={home}
          as={GatsbyLink}
          display={{ base: "inherit", lg: "none" }}
        >
          <StaticImage
            src="../../images/Logo.png"
            alt="Casa Bernat Isil"
            loading="eager"
            layout="fixed"
            placeholder="tracedSVG"
          />
        </LocalizedLink>
        <LocalizedLink
          to="/"
          title={home}
          as={GatsbyLink}
          display={{ base: "none", lg: "inherit" }}
        >
          <StaticImage
            src="../../images/LogoHeader.png"
            alt="Casa Bernat Isil"
            loading="eager"
            layout="fixed"
            placeholder="tracedSVG"
            width={200}
          />
        </LocalizedLink>

        <Box
          ref={btnRef}
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
          aria-label="Toggle navigation"
        >
          <HamburgerIcon w={8} h={8} />
        </Box>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
          variant="sickGreen"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton size="lg" />
            <DrawerHeader>
              <StaticImage
                src="../../images/Logo.png"
                alt="Casa Bernat Isil"
                loading="eager"
                layout="fixed"
                placeholder="tracedSVG"
              />
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={8} textAlign="center">
                <Languages />

                <Box>
                  <NavLink
                    to="/casa-bernat"
                    onClick={onClose}
                    variant="nav-link-base"
                  >
                    {menuTitle}
                  </NavLink>
                  {menuItems.map((menu, index) => {
                    return menu.variant !== "nav-sublink" ? (
                      <Box key={index}></Box>
                    ) : (
                      <NavLink
                        key={index}
                        to={menu.link}
                        onClick={onClose}
                        variant="nav-sublink-base"
                      >
                        {menu.name}
                      </NavLink>
                    )
                  })}
                  {menuItems.map((menu, index, arr) => {
                    return menu.variant === "nav-sublink" ? (
                      <Box key={index}></Box>
                    ) : (
                      <NavLink
                        key={index}
                        to={menu.link}
                        isLast={index + 1 === arr.length}
                        onClick={onClose}
                        variant="nav-link-base"
                      >
                        {menu.name}
                      </NavLink>
                    )
                  })}
                </Box>

                <Flex
                  direction="row"
                  alignSelf="right"
                  justify="space-evenly"
                  w="full"
                >
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
                </Flex>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Flex
          display={{ base: "none", lg: "inherit" }}
          direction="column"
          alignItems="self-end"
          justify="flex-end"
        >
          <Languages />
          <Flex mt={8} align="center" direction="row" justify="flex-end">
            <Menu matchWidth={true} offset={8} isOpen={isMenuOpen}>
              <MenuButton as={Link} variant="nav-link-lg">
                {menuTitle}
              </MenuButton>
              <MenuList>
                {menuItems.map((menu, index) => {
                  return menu.variant !== "nav-sublink" ? (
                    <Box key={index}></Box>
                  ) : (
                    <MenuItem key={index}>
                      <NavLink
                        to={menu.link}
                        onClick={onMenuClose}
                        variant="nav-sublink-lg"
                      >
                        {menu.name}
                      </NavLink>
                    </MenuItem>
                  )
                })}
              </MenuList>
            </Menu>
            {menuItems.map((menu, index, arr) => {
              return menu.variant === "nav-sublink" ? (
                <Box key={index}></Box>
              ) : (
                <NavLink
                  key={index}
                  to={menu.link}
                  isLast={index + 1 === arr.length}
                  onClick={onMenuClose}
                  variant="nav-link-lg"
                >
                  {menu.name}
                </NavLink>
              )
            })}
          </Flex>
        </Flex>

        <Flex
          display={{ base: "none", lg: "inherit" }}
          direction="column"
          alignSelf="right"
          justify={{ md: "space-between", lg: "flex-end" }}
        >
          <SocialLink
            color="white"
            item={social.instagram}
            icon={FaInstagram}
          />
          <SocialLink color="white" item={social.whatsapp} icon={FaWhatsapp} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
