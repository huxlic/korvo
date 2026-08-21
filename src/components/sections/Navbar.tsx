import {Wordmark} from "../ui/Wordmark.tsx";
import navLinks from "../../data/navLinks.ts";

export const Navbar = () => {
	return (
		<>
			<header className={"px-10 py-6"}>
				
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
					<ul className={"flex gap-4 text-[11px] font-semibold"}>
						{navLinks.map(({label, href}) => (
							<li key={href} className={"uppercase scale-y-105 border-b-[1.5px] border-dashed"}>
								<a href={href}>{label}</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};