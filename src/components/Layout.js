import React from "react"
//import useSiteMetadata from "./siteMetadata"
import { useLocale } from "../hooks/locale"

import { Flex, Box } from "@chakra-ui/react"

//import Header from "./sections/Header"
//import Footer from "./sections/Footer"

const TemplateWrapper = ({ children, pageContext: { locale } }) => {
  //const { defaultTitle } = useSiteMetadata()
  const { changeLocale } = useLocale()
  changeLocale(locale)

  return (
    <Box
      minH="100vh"
      width="full"
      color="white"
      bg="#b7aa2e"
      //backgroundImage="url('/images/Pattern.svg')"
      //backgroundPosition="bottom"
      //backgroundRepeat="no-repeat"
    >
      <Flex as="main" pos="relative" w="full" direction="column">
        {children}
      </Flex>
    </Box>
  )
  //return (
  //<Flex
  //direction="column"
  //align="center"
  //justify="space-between"
  //overflow="hidden"
  //minH="100vh"
  //pos="relative"
  //>
  //<Header />
  //<Flex as="main" pos="relative" w="full" pt="100px" direction="column">
  //{children}
  //</Flex>
  //<Footer title={defaultTitle} />
  //</Flex>
  //)
}

export default TemplateWrapper
