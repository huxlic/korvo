import {Wordmark} from "../ui/Wordmark.tsx";
import navLinks from "../../data/navLinks.ts";
import {FlipLink} from "../ui/FlipLink.tsx";
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import useOpenMenu from "../../store/store.ts";

gsap.registerPlugin(SplitText);

export const Navbar = () => {
	const {isOpen, setIsOpen} = useOpenMenu();
	
	const wordmarkRef = useRef<HTMLAnchorElement | null>(null);
	const dotRef = useRef<HTMLDivElement | null>(null);
	
	useGSAP(() => {
		const wordmark: HTMLElement | null = wordmarkRef.current;
		const dot: HTMLDivElement | null = dotRef.current;
		if (!wordmark || !dot) return;
		
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
					scrub: true,
					invalidateOnRefresh: true,
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
					scale: () => 94 / wordmark.offsetWidth,
					top: "50%",
					yPercent: -50,
					transformOrigin: "left top",
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
			<header className={"px-8 lg:px-10 py-4 lg:py-6 fixed top-0 w-full z-50"}>
				<nav className={"flex justify-between items-center box-border"}>
					
					<div className="relative z-60" style={{width: 'clamp(326px, 45vw, 550px)'}}>
						<div className="hidden md:block w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-warm-cream"
						     ref={dotRef}/>
						<p className={"text text-[10px] md:text-[13px] lg:text-[16px] absolute right-0 top-full w-max uppercase font-semibold tracking-tighter overflow-hidden "}
						   aria-label={"Trained on stains. Deployed on tables."}>Trained on stains. Deployed on tables.
						</p>
						
						<div className="absolute top-6 md:top-8 lg:top-10 w-full">
							<a ref={wordmarkRef} href="#hero" className="block w-full ">
								<Wordmark/>
							</a>
						</div>
					</div>
					
					<div
						className={"hidden md:flex relative z-10 gap-4 text-[7px] md:text-[8px] lg:text-[10px] font-semibold"}>
						{navLinks.map(({label, href}) => (
							<FlipLink key={href} href={href}>
								{label}
							</FlipLink>
						))}
					</div>
				
				</nav>
			</header>
			
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`fixed top-4 lg:top-6 right-8 lg:right-10 z-70 flex items-center gap-2 ${isOpen ? "bg-warm-cream text-walnut-shadow border-warm-cream" : "border-dotted"} md:hidden px-[1.8em] py-[0.9em] border-[1.4px] rounded-full cursor-pointer transition-all duration-200`}
			>
				<div
					className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full ${isOpen ? "bg-walnut-shadow" : "bg-warm-cream"}`}/>
				<p className={"uppercase text-[20px] font-semibold tracking-tighter scale-y-105"}>
					{isOpen ? "Close" : "Menu"}
				</p>
			</button>
		</>
	);
};