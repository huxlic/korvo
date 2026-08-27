import {Canvas} from "@react-three/fiber";
import cutting_mat from "../../assets/images/cutting_table.jpg";
import gsap from "gsap";
import AnimatedCork from "../models/AnimatedCork.tsx";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";

export const Hero = () => {
	
	useGSAP(() => {
		const heroCopy = SplitText.create("#hero-copy", {
			type: "lines, words, chars",
		})
		
		const hypeTitle = SplitText.create("#hype-title", {
			type: "chars",
			charsClass: "opacity-0 inline-block",
		})
		const hypeDesc = SplitText.create("#hype-desc", {
			type: "chars, words",
			charsClass: "opacity-0 inline-block",
		})
		
		const heroCardHeader = SplitText.create("#hero-card-header", {
			type: "lines",
			linesClass: "line",
			mask: "lines"
		})
		const heroCardDesc = SplitText.create("#hero-card-desc", {
			type: "lines",
			linesClass: "line",
			mask: "lines"
		})
		
		
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				end: "+=1000",
				scrub: 1,
			}
		});
		
		tl.to("#hero-content", {
				backgroundColor: "#1A1513",
				backdropFilter: "blur(4px)"
			})
			.to(heroCopy.lines, {
				x: 40,
				filter: "blur(8px)",
				opacity: 0,
				stagger: 0.05
			}, "<")
			.to(heroCardHeader.lines, {
				yPercent: 100,
				stagger: {
					each: 0.05,
					from: "end"
				},
				duration: 1,
				ease: "c"
			})
			.to(heroCardDesc.lines, {
				yPercent: 100,
				stagger: {
					each: 0.05,
					from: "end"
				},
				ease: "c",
				duration: 1,
			}, "<")
			.to("#dashline", {
				width: 0,
				ease: "circ.in"
			}, "<")
			.to("#hero-card", {
				opacity: 0,
				display: "none",
			}, "<50%")
			.to(heroCopy.elements, {
				display: "none"
			})
			.to("#ai-hype", {
				opacity: 1
			})
			.to(hypeTitle.chars, {
				opacity: 1,
				stagger: {
					each: 0.025,
					from: "end"
				},
				ease: "circ.in",
				duration: 1
			}, "sync")
			.to(hypeDesc.chars, {
				opacity: 1,
				stagger: 0.025,
				ease: "circ.in",
				duration: 1
			}, "sync")
			.from("#hype-title", {
				yPercent: -40,
				ease: "circ.inOut"
			}, "<")
			.from("#hype-desc", {
				yPercent: 50,
				ease: "circ.inOut"
			}, "<")
			.from("#drive", {
				opacity: 0,
				xPercent: 100
				
			})
			.to("#hype-title", {
				opacity: 0,
				yPercent: 40,
				ease: "circ.inOut"
			})
			.to("#hype-desc", {
				opacity: 0,
				yPercent: -40,
				ease: "circ.inOut"
			}, "<")
			.to("#hero-content", {
				backgroundImage: "linear-gradient(to right, #1A1513, #DD5000)"
			})
		
		
	}, [])
	
	return (
		<>
			<section id="hero" className={"relative w-full h-[800vh]"}>
				<div
					className={"sticky top-0 h-screen bg-cover bg-bottom-right overflow-hidden "}
					style={{backgroundImage: `url(${cutting_mat})`}}
				>
					<div
						id="hero-card"
						className="flex flex-col justify-between absolute z-10 ml-8 lg:ml-10 left-0 bottom-4 lg:bottom-6 box-border px-3 py-3 lg:px-4 lg:py-5 w-43.25 lg:w-60 bg-linear-to-br from-white/15 to-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-[#FFFFFF26] backdrop-blur-lg backdrop-saturate-100 ">
						<p id="hero-card-header"
						   aria-label={"lusion's design, deconstructed, studied and rebuilt by hux."}
						   className={"text-[16px] h-max lg:text-[20px] pb-[25%] uppercase font-semibold scale-y-105 tracking-tighter leading-4.5 lg:leading-6 overflow-hidden"}>lusion's
							design,
							deconstructed, studied
							and rebuilt by hux.
						</p>
						
						<span id="dashline" className="w-full h-px dashline"/>
						
						<p id="hero-card-desc"
						   className={"text-end text-[11px] lg:text-[15px] pt-[10%] font-medium tracking-tighter"}
						   aria-label={"Quite possibly the most unnecessarily advanced coaster."}>Quite
							possibly the most
							unnecessarily
							advanced coaster.</p>
					</div>
					
					<div id="hero-content"
					     className="absolute inset-0 flex items-center justify-between px-10 overflow-hidden">
						<p id="hero-copy"
						   className={"absolute z-10 right-10 w-71.75 lg:w-105 leading-6 text-[18px] lg:leading-normal lg:text-[20px] lg:text-[24px] font-medium tracking-tighter"}
						   aria-label={"Optimized to lift, insulate, and grip in real time. korvo makes the mundane feel groundbreaking."}>Optimized
							to lift, insulate, and grip in real time. Korvo makes the mundane feel groundbreaking.</p>
						
						<div id="ai-hype"
						     className="absolute opacity-0 right-10 left-10 z-20 flex justify-between items-center px-10 lg:px-20">
							<h2
								id="hype-title"
								className={"w-43.75 lg:w-62 uppercase text-[32px] lg:text-[45px] font-semibold tracking-tighter leading-8 lg:leading-11 scale-y-105"}
								aria-label={"isn’t just a coaster."}>isn’t just
								a coaster.</h2>
							
							<p
								id="hype-desc"
								className={"w-39 lg:w-65 text-[18px] lg:text-[25px] leading-6 lg:leading-8 tracking-tighter font-medium scale-y-105"}
								aria-label={"Korvo isn't just a coaster. It's a paradigm shift in tabletop infrastructure."}>
								Korvo isn't just a coaster. It's a paradigm shift in tabletop infrastructure.
							</p>
						</div>
					
					</div>
					
					<div id="drive" className="absolute bottom-5 right-8">
						<span className="absolute left-0 top-0 w-full h-px dashline"/>
						<p className={"uppercase tracking-tighter font-semibold text-[11px] text-end mt-[20%] leading-none"}>*
							manual <br/> programming</p>
					</div>
					
					<Canvas className={""}>
						<ambientLight intensity={1.5}/>
						<directionalLight position={[3, 5, 2]} intensity={5}/>
						<AnimatedCork/>
					</Canvas>
				
				</div>
			</section>
		</>
	);
};