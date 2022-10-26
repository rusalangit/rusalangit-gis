import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Login = lazy(() => import("./pages/login"))
const Register = lazy(() => import("./pages/register"))
const Layout = lazy(() => import("./components/layout"))
const Dashboard = lazy(() => import("./pages/dashboard"))
const Database = lazy(() => import("./pages/database"))
const Setting = lazy(() => import("./pages/Setting"))

const WorkoutForm = lazy(() => import("./components/LocationForm"))

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="add-lahan" element={<WorkoutForm />} />
						<Route path="database" element={<Database />} />
						<Route path="setting" element={<Setting />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	)
}

export default App
