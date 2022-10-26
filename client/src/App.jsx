import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const Layout = lazy(() => import("./components/Layout"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Database = lazy(() => import("./pages/Database"))
const Setting = lazy(() => import("./pages/Setting"))

const AddLocationForm = lazy(() => import("./components/AddLocationForm"))

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route
							path="formpenambahan"
							element={<AddLocationForm />}
						/>
						<Route path="database" element={<Database />} />
						<Route path="setting" element={<Setting />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	)
}

export default App
