import { mode } from "@chakra-ui/theme-tools"

function variantButton(props) {
  const { colorScheme: c } = props

  const {
    bg = `${c}.500`,
    color = c === "sickGreen" ? "white" : "sickGreen.500",
    activeBg = `${c}.700`,
  } = {}

  const background = mode(bg, `${c}.200`)(props)

  return {
    minW: 10,
    py: 2,
    px: 2,
    fontSize: "sm",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    bg: background,
    color: mode(color, `gray.800`)(props),
    borderRadius: "2xl",
    _hover: {
      textDecoration: "underline",
      color: mode(color, `gray.800`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
}

export default {
  baseStyle: {
    boxShadow: "none",
    _focus: {
      boxShadow: "none",
      textDecoration: "underline",
    },
  },
  variants: {
    button: variantButton,
    "nav-link-lg": {
      textTransform: "uppercase",
      ml: 4,
    },
    "nav-link-base": {
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    "nav-sublink-lg": {
      fontSize: "xs",
    },
    "nav-sublink-base": {},
    "in-footer": {
      textDecoration: "underline",
      color: "sickGreen.500",
    },
  },
}
