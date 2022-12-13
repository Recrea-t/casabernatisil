const styles = {
  global: props => ({
    html: {
      //scrollBehavior: "smooth",
      fontSize: "20px",
      [`@media screen and (max-width: ${props.theme.breakpoints.sm})`]: {
        fontSize: "16px",
      },
    },
    body: {
      color: "staleGrey.500",
    },
    ".markdown": {
      a: {
        textDecoration: "underline",
        color: "sickGreen.500",
      },
			li: {
				listStyle: "none",
        margin: "0 !important",

				"::before": {
					content: '"\\2022"',
					color: "sickGreen.500",
					fontWeight: "bold",
					display: "inline-block",
					width: "1em",
				},
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
      ".slick-dots": {
        position: "absolute",
        bottom: "1rem",
        left: "-1rem",

        li: {
          margin: "0",
        },

        button: {
          _before: {
            fontSize: ".75rem",
            color: "#B7AA2E",
            opacity: 0.75,

            _hover: {
              opacity: 1,
            },
          },
        },

        ".slick-active": {
          button: {
            _before: {
              fontSize: "1rem",
              color: "#696A6F",
              textShadow:
                "-1px 0 #B7AA2E, 0 1px #B7AA2E, 1px 0 #B7AA2E, 0 -1px #B7AA2E",
            },
          },
        },
      },
			".slick-arrow": {
				position: "absolute",
				bg: "sickGreen.500",
				color: "white",

				"::before": {
					content: "none",
				},
			},
      ".slick-prev": {
        left: "0px",

      },
      ".slick-next": {
        right: "2rem",
      },
    },
    [`@media screen and (min-width: ${props.theme.breakpoints.md})`]: {
      ".spaces": {
        ".slick-track": {
          width: "100% !important",
          display: "flex",
          justifyContent: "center",

          ".slick-slide": {
            height: "100%",

            "> div": {
              height: "100%",
            },
          },
        },
      },
    },
  }),
}

export default styles
