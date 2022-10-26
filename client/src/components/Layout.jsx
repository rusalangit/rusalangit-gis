import Header from "./Header"
import Footer from "./footer"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<section className="h-[80vh] flex flex-col items-center lg:flex-row">
				<Sidebar />
				<div className="w-full h-full p-10">
					<Outlet />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Layout
