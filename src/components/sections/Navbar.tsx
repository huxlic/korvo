import {Wordmark} from "../ui/Wordmark.tsx";
import navLinks from "../../data/navLinks.ts";
import {FlipLink} from "../ui/FlipLink.tsx";
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

gsap.registerPlugin(SplitText);

export const Navbar = () => {
	const wordmarkRef = useRef(null);
	const dotRef = useRef<HTMLDivElement | null>(null);
	
	useGSAP(() => {
		const wordmark = wordmarkRef.current;
		const dot = dotRef.current;
		
		const text = SplitText.create(".text", {
			type: "words",
			charsClass: "inline-block",
		});
		
		const tl = gsap.timeline({
			defaults: {
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "+=1000",
					scrub: true
				},
				
			},
		});
		
		tl.to(text.words, {
				yPercent: -100,
				stagger: 0.05,
				duration: 1,
			})
			.to(text.words, {
				display: "none"
			})
			.to(
				wordmark,
				{
					width: 94,
					left: 0,
					top: "50%",
					yPercent: -50,
					duration: 1,
					ease: "power2.inOut",
					delay: 1
				}
			)
			.to(
				dot,
				{
					width: 0,
					height: 0,
				});
	}, {});
	
	return (
		<>
			<header className={"px-10 py-6 fixed top-0 w-full z-50"}>
				<nav className={"flex justify-between items-center box-border"}>
					<div className="relative w-138">
						<div className="w-2.5 h-2.5 rounded-full bg-warm-cream" ref={dotRef}/>
						
						<p className={"absolute right-0 top-full w-max uppercase font-semibold tracking-tighter overflow-hidden text"}>Made
							for
							mugs. Built for tables.</p>
						
						<a ref={wordmarkRef} className={"absolute top-10 w-137.5"} href="#hero">
							<Wordmark/>
						</a>
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