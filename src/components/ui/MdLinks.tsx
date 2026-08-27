import navLinks from "../../data/navLinks.ts";
import useOpenMenu from "../../store/store.ts";

export const MdLinks = () => {
	const {isOpen, setIsOpen} = useOpenMenu();
	
	return (
		<div className={"md:hidden grid grid-cols-4 fixed z-60 inset-0 bg-[#201914bf]"}>
			<div onClick={() => setIsOpen(!isOpen)}/>
			<div className="flex flex-col justify-between bg-walnut-shadow col-span-3 px-10 py-8">
				<div/>
				<div className={"flex flex-col gap-6 uppercase text-[73px] font-semibold tracking-tighter"}>
					{
						navLinks.map(({label, href}) => (
							<li className={"relative w-max list-none leading-none"} onClick={() => setIsOpen(!isOpen)}
							    key={label}>
								<a href={href}>
									{label}
								</a>
								<span className="absolute left-0 -bottom-2 w-full h-px dashline"/>
							</li>
						))
					}
				</div>
				
				<div className="uppercase font-semibold">
					<span
						className={"text-driftwood text-[24px] tracking-tighter"}>general enquires:</span>
					<p className={"text-[32px] tracking-tighter scale-y-105"}>oladimejihassan03@gmail.com</p>
				</div>
			</div>
		</div>
	);
};