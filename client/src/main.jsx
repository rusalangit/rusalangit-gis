import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { LocationsContextProvider } from "./context/LocationsContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<LocationsContextProvider>
			<App />
		</LocationsContextProvider>
	</React.StrictMode>
)
