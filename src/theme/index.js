// Global style overrides
import styles from "./styles"

// Foundational style overrides
import colors from "./foundations/colors"
import shadows from "./foundations/shadows"
import typography from "./foundations/typography"

// Component style overrides
import FormLabel from "./components/form-label"
import Container from "./components/container"
import Heading from "./components/heading"
import Button from "./components/button"
import Drawer from "./components/drawer"
import Link from "./components/link"
import Menu from "./components/menu"
import Input from "./components/input"
import Textarea from "./components/textarea"

const overrides = {
  styles,
  colors,
  shadows,
  ...typography,
  components: {
    Container,
    Heading,
    Button,
    Drawer,
    CloseButton: { ...Button },
    Link,
    Menu,
    FormLabel,
    Input,
    Textarea,
  },
}

export default overrides
