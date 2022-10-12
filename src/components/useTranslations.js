import { useStaticQuery, graphql } from "gatsby"
import { useLocale } from "../hooks/locale"

function useTranslations() {
  // Grab the locale (passed through context) from the Locale Provider
  // through useLocale() hook
  const { locale } = useLocale()
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    }
  })

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0]

  return translations
}

export default useTranslations

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            home
            menuTitle
            spaces
            activities
            rebost

            whoId
            historyId
            spacesId

            next
            prev
            of

            moreButton
            bookButton

            callUs
            writeUs

            name
            email
            message
            conditionsPart1
            conditionsPart2

            followUs
            legalNote
            privacyPolicy

            reservation
            submit
            submitting
            errorConditions
            messageSuccessfulTitle
            messageSuccessfulDescription
          }
        }
      }
    }
  }
`
