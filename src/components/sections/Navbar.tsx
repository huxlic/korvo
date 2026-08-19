import navLinks from "../../data/navLinks.ts";

export const Navbar = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
						{navLinks.map(({label, href}) => (
							<li key={href} className={"uppercase"}>
								<a href={href}>{label}</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};