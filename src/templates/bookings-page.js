import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { Container, Box, Heading } from "@chakra-ui/react"
import { useLocale } from "../hooks/locale"
import ImportScript from "../hooks/misterplan"

import SEO from "../components/SEO/seo"
import Hero from "../components/sections/Hero"

const BookingsPage = props => {
  const { locale } = useLocale()
  const { frontmatter } = props.data.default

	const idiomes = ({
		"ca": "6",
		"es": "0",
		"en": "1",
		"fr": "3"
	})

	ImportScript("https://www.mrplan.es/experiencias/modulos/TWidget/lib/TWidgetInc.php")

  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <Hero {...props} />
      <Box>
        <Container variant="is-section">
          <Heading as="h2" variant="in-section">
            {frontmatter.title}
          </Heading>


					<Box
						id="TEwsBuscadorB-1-1-582353-"
						className="TEwsWidgetInc capa_izq ancho_total"
						BudgetV="2"
						mini_preview_V="2"
						url_confirmacion="../confirmation"
						TEws_Hash="eae06f621790d550f6546e6be284851cbdea7756"
						TEws_onSearch=""
						TEws_version="10"
						TEws_tipo_widget="2"
						BV7_tipo_inicio="0"
						BV7_cambio_inicio="0"
						TEws_quitar_cabecera="0"
						TEws_iniciar_cerrado="0"
						TEws_bus_texto="0"
						TEws_sel_dispo="0"
						TEws_form_contacto="0"
						TEws_result_in_esl="0"
						TEws_result_in_ext="0"
						TEws_cerrar_buscar="0"
						TEws_ver_resto_casas="0"
						TEws_id_elemento="582353"
						TEws_tipo_elemento="1"
						TEws_activar_mas_menos="1"
						TEws_posicion="original"
						TEws_formato="2"
						TEws_formato_ficha="10"
						TEws_CoreSearch_V="7"
						TEws_id_categoria="0"
						TEws_modo="RES"
						TEws_fecha_ini=""
						TEws_n_noches="2"
						TEws_n_adultos="2"
						TEws_n_ninos="0"
						TEws_radio="0"
						TEsw_filtro_exp=""
						TEws_filtro_casa=""
						TEws_autoload="0"
						TEws_id_destino="1"
						TEws_id_puntoventa="7272"
						TEws_id_idioma={idiomes[locale]}
						TEwsResultadoCoreSearch="TEwsResultCoreSearch-1-1-582353-"
						alt="MisterPlan  - Powered by RuralGest  - http://www.misterplan.es"
						title_NO="MisterPlan  - Powered by RuralGest ">
					</Box>

					<Box
						id="TEwsResultCoreSearch-1-1-582353-"
						className="capa_izq TEwsBuscador_Experiencias_evnt"
						style={{width: "100%", marginTop: "20px"}}
						alt_NO="MisterPlan - Powered by RuralGest - http://www.misterplan.es"
						title_NO="MisterPlan - Powered by RuralGest ">
					</Box>
        </Container>
      </Box>
    </>
  )
}

BookingsPage.propTypes = {
  data: PropTypes.shape({
    rawMarkdownBody: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BookingsPage

export const query = graphql`
  query BookingsPageTemplateQuery($id: String) {
    default: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
    images: markdownRemark(
      fields: { locale: { eq: "ca" }, templateKey: { eq: "bookings-page" } }
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
