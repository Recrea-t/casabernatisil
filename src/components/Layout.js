import React from "react"
import useSiteMetadata from "./siteMetadata"
import { useLocale } from "../hooks/locale"

import { Flex } from "@chakra-ui/react"

import Header from "./sections/Header"
import Footer from "./sections/Footer"

const TemplateWrapper = ({ children, pageContext: { locale } }) => {
  const { defaultTitle } = useSiteMetadata()
  const { changeLocale } = useLocale()
  changeLocale(locale)

  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      overflow="hidden"
      minH="100vh"
      pos="relative"
    >
      <Header />
      <Flex as="main" pos="relative" w="full" pt="135px" direction="column">
        {children}
      </Flex>
      <Footer title={defaultTitle} />
    </Flex>
  )
}

export default TemplateWrapper
