import {Wordmark} from "../ui/Wordmark.tsx";
import navLinks from "../../data/navLinks.ts";
import {FlipLink} from "../ui/FlipLink.tsx";

export const Navbar = () => {
	return (
		<>
			<header className={"px-10 py-6 fixed top-0 w-full z-50"}>
				
				<nav className={"flex justify-between items-center box-border"}>
					<div className="relative">
						<div className="w-2.5 h-2.5 rounded-full bg-warm-cream"/>
						<div className="absolute top flex flex-col items-end gap-2">
							<p className={"uppercase font-semibold tracking-tighter"}>Made for mugs. Built for tables.</p>
							<a href="#hero">
								<Wordmark className={"w-137.5"}/>
							</a>
						</div>
					</div>
					<div className={"flex gap-4 text-[10px] font-semibold"}>
						{navLinks.map(({label, href}) => (
							<FlipLink key={href} href={href}>
								{label}
							</FlipLink>
						))}
					</div>
				</nav>
			</header>
		</>
	);
};