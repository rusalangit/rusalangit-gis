import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocationsContext } from "./hooks/useLocationsContext"

const SignIn = lazy(() => import("./pages/SignIn"))
const SignUp = lazy(() => import("./pages/SignUp"))
const Layout = lazy(() => import("./components/Layout"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Database = lazy(() => import("./pages/Database"))
const Setting = lazy(() => import("./pages/Setting"))

const AddLocationForm = lazy(() => import("./components/AddLocationForm"))

const App = () => {
    const { dispatch } = useLocationsContext()

    useEffect(() => {
        const fetchLocations = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_EXPRESS_URI}/api/locations`
            )
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: "SET_LOCATIONS", payload: json })
            }
        }

        fetchLocations()
    }, [])

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="database" element={<Database />} />
                        <Route
                            path="form-pengajuan-penambahan"
                            element={<AddLocationForm />}
                        />
                        <Route />
                        <Route path="setting" element={<Setting />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
