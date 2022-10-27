import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { LocationsContextProvider } from "./context/LocationsContext"
import { AuthContextProvider } from "./context/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <LocationsContextProvider>
                <App />
            </LocationsContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
)
