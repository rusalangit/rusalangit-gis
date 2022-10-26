import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header className="px-12 py-6 w-screen h-[10vh] grid grid-cols-3 justify-items-center items-center">
			<h1 className="font-bold col-start-2">Rusalangit GIS</h1>
			<div className="flex flex-row gap-2 justify-self-end items-center">
				<h2>Hi, Dhaffa Agus</h2>
				<div className="h-8 w-8 rounded-full bg-slate-600"></div>
			</div>
		</header>
	)
}

export default Header
