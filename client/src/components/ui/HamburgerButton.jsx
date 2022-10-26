const HamburgerButton = ({ isOpen, onClick }) => {
	const genericHamburgerLine =
		"h-0.5 w-6 rounded-full bg-white transition ease transform duration-300"
	return (
		<div
			onClick={onClick}
			className={`flex cursor-pointer justify-center ${
				isOpen ? "" : "items-center"
			}`}
		>
			<div
				className={`p-2 sm:p-4 space-y-2 bg-stone-900 rounded-full shadow transition ease transform duration-300
					${isOpen ? "rounded" : "rounded-full"}`}
			>
				<div
					className={`${genericHamburgerLine} group-hover:opacity-100 ${
						isOpen
							? "opacity-100"
							: "rotate-45 translate-y-2.5 opacity-100"
					}`}
				/>
				<div
					className={`${genericHamburgerLine} group-hover:opacity-100 ${
						isOpen ? "opacity-100" : "opacity-0"
					}`}
				/>
				<div
					className={`${genericHamburgerLine} group-hover:opacity-100 ${
						isOpen
							? "opacity-100 "
							: "-rotate-45 -translate-y-2.5 opacity-100"
					}`}
				/>
			</div>
		</div>
	)
}

export default HamburgerButton
