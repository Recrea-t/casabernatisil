import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { Container, Box, Heading } from "@chakra-ui/react"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"

const ConfirmPage = props => {
  const { frontmatter } = props.data.default

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />
      <Box>
        <Container variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.title}
          </Heading>

					<Box className="elp_Contenido TBudgetV2Inc_Confirmacion_evnt">
						<script
							src="https://www.mrplan.es/scr/modulos/budget/lib/TBudgetV2Inc.php?activehead=1">
						</script>
					</Box>
        </Container>
      </Box>
    </>
  )
}

ConfirmPage.propTypes = {
  data: PropTypes.shape({
    rawMarkdownBody: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ConfirmPage

export const query = graphql`
  query ConfirmPageTemplateQuery($id: String) {
    default: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
    images: markdownRemark(
      fields: { locale: { eq: "ca" }, templateKey: { eq: "confirm-page" } }
    ) {
      frontmatter {
        hero {
          image {
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
  }
`
