import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import DividerLine from "./ui/DividerLine"
import HamburgerButton from "./ui/HamburgerButton"
import { SidebarData } from "../data/SidebarData"

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(true)
	const location = useLocation().pathname

	return (
		<nav
			className={`w-screen lg:h-[80vh] z-20 mx-8 ${
				sidebar ? "lg:w-1/12" : "lg:w-1/6"
			}`}
		>
			<div
				className={`-top-0 absolute lg:h-full px-10 py-6 md:py-3 lg:px-0 lg:py-12 ${
					sidebar ? "lg:w-1/12" : "lg:w-1/6"
				}`}
			>
				<div className="flex flex-row items-center h-full bg-white rounded-xl shadow-md lg:py-6 lg:flex-col">
					<HamburgerButton
						isOpen={sidebar}
						onClick={() => {
							setSidebar(!sidebar)
						}}
					/>
					<DividerLine />
					<ul className="hidden lg:flex lg:flex-col gap-6 w-full">
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className="mx-6">
									<Link
										to={item.path}
										className={`flex flex-row gap-2 items-center p-3 rounded-lg ${
											sidebar ? "justify-center" : ""
										} ${
											location === item.path
												? "bg-stone-50 shadow-md justify-center"
												: ""
										}`}
									>
										<img
											src={`/assets/icons/${item.image}.png`}
											className="flex justify-self-center w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
										/>
										<p
											className={
												sidebar ? "hidden" : "block"
											}
										>
											{item.title}
										</p>
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Sidebar
