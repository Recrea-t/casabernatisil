const styles = {
  global: {
    html: {
      //scrollBehavior: "smooth",
    },
    body: {
      color: "staleGrey.500",
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },
    },
    ".is-active": {
      textDecoration: "underline",
    },
    ".scrollable": {
      overflowX: "scroll",
      overflowY: "hidden",
      "-webkit-overflow-scrolling": "touch",

      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    ".is-slider": {
      position: "relative",
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,

      ".slick-slide": {
        padding: "0 1rem",
        overflow: "hidden",
      },
      ".slick-list": {
        height: "100%",
        margin: "0 -2rem",

        ".slick-track": {
          height: "100%",

          ".slick-slide": {
            height: "100%",

            "> div": {
              height: "100%",
            },
          },
        },
      },
    },
  },
}

export default styles
