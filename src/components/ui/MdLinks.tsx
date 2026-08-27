import navLinks from "../../data/navLinks.ts";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import useMenuStore from "../../store/useMenuStore.ts";

export const MdLinks = () => {
	const {toggleMenu} = useMenuStore();
	
	useGSAP(() => {
		gsap.from("#md-links", {
			xPercent: 100,
		})
		
	}, {})
	
	return (
		<div className={"md:hidden grid grid-cols-4 fixed z-60 inset-0 bg-[#201914bf]"}>
			<div onClick={toggleMenu}/>
			<div id="md-links" className="flex flex-col justify-between bg-walnut-shadow col-span-3 px-10 py-8">
				<div/>
				<div className={"flex flex-col gap-6 uppercase text-[73px] font-semibold tracking-tighter"}>
					{
						navLinks.map(({label, href}) => (
							<li className={"relative w-max list-none leading-none"} onClick={toggleMenu}
							    key={label}>
								<a href={href}>
									{label}
								</a>
								<span className="absolute left-0 -bottom-2 w-full h-px dashline"/>
							</li>
						))
					}
				</div>
				
				<div className="flex flex-col uppercase font-semibold">
					<span
						className={"w-max text-driftwood text-[22px] tracking-tighter"}>general enquires:</span>
					
					<a href="mailto:oladimejihassan03@gmail.com"
					   className={"text-[28px] tracking-tighter scale-y-105 leading-none"}>oladimejihassan03@gmail.com</a>
				</div>
			</div>
		</div>
	);
};