import React from 'react'
import CustomLayout from "./wrapPageElement"

export const wrapPageElement = CustomLayout


export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
		<script
			type="text/javascript"
			src="https://www.mrplan.es/experiencias/modulos/TWidget/lib/TWidgetInc.php"
		></script>
  ])
}
