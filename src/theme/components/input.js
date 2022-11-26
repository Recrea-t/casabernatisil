export default {
  variants: {
    filled: {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: "lightGrey.200",
        _hover: {
          bg: "lightGrey.200",
        },
        _readOnly: {
          boxShadow: "none !important",
          userSelect: "all",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
        _invalid: {
          borderColor: "lightGrey.500",
        },
        _focus: {
          bg: "lightGrey.200",
          borderColor: "staleGrey.500",
        },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
      },
    },
  },
}
