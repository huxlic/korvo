import navLinks from "../../data/navLinks.ts";

export const MdLinks = () => {
	return (
		<div className={"md:hidden grid fixed z-49 inset-0"}>
			<div className="bg-walnut-shadow">
				<ul className={"flex flex-col gap-2"}>
					{
						navLinks.map(({label, href}) => (
							<li key={label}>
								<a href={href}>
									{label}
								</a>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
};