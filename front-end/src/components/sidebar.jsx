import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import DividerLine from "./ui/divider-line"
import HamburgerButton from "./ui/hambuger-button"
import { SidebarData } from "../data/sidebar-data"

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(true)
	const location = useLocation().pathname

	return (
		<nav className={`h-[80vh] z-20 mx-8 ${sidebar ? "w-1/12" : "w-1/6"}`}>
			<div
				className={`-top-0 absolute h-full py-12 ${
					sidebar ? "w-1/12" : "w-1/6"
				}`}
			>
				<div className="flex flex-col items-center h-full bg-white rounded-xl py-6 shadow-md">
					<HamburgerButton
						isOpen={sidebar}
						onClick={() => {
							setSidebar(!sidebar)
						}}
					/>
					<DividerLine />
					<ul className="flex flex-col gap-6 w-full">
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className="mx-6">
									<Link
										to={item.path}
										className={`flex flex-row gap-2 items-center px-4 py-3 rounded-lg ${
											sidebar ? "justify-center" : ""
										} ${
											location === item.path
												? "bg-stone-100 shadow-md justify-center"
												: ""
										}`}
									>
										<img
											src={`/assets/icons/${item.image}.png`}
											className="flex justify-self-center w-8 h-8"
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
