import {Canvas} from "@react-three/fiber";
import cutting_mat from "../../assets/images/cutting_table.jpg";
import gsap from "gsap";
import AnimatedCork from "../models/AnimatedCork.tsx";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";

export const Hero = () => {
	
	useGSAP(() => {
		const heroCopy = SplitText.create("#hero-copy", {
			type: "chars, lines",
			charsClass: "w-max"
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
			.to(heroCopy.elements, {
				display: "none"
			}).to("#ai-hype", {
			opacity: 1,
		})
		
		
	}, [])
	
	return (
		<section id="hero" className={"relative w-full h-[1000vh]"}>
			<div
				className={"sticky top-0 h-screen bg-cover bg-bottom-right "}
				style={{backgroundImage: `url(${cutting_mat})`}}
			>
				<div
					className="flex flex-col justify-between absolute z-10 mx-10 left-0 box-border px-3 py-3 lg:px-4 lg:py-5 bottom-6 w-43.25 lg:w-60 bg-linear-to-br from-white/15 to-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-[#FFFFFF26] backdrop-blur-lg backdrop-saturate-100 ">
					<p className={"text-[16px] lg:text-[21px] pb-[25%] uppercase font-semibold scale-y-105 tracking-tighter leading-4.5 lg:leading-6"}>lusion's
						design,
						reverse-engineered
						and rebuilt by hux.</p>
					
					<span className="w-full h-px dashline"/>
					
					<p className={"text-end text-[11px] lg:text-[15px] pt-[10%] font-medium tracking-tighter"}>Quite
						possibly the most
						unnecessarily
						advanced coaster.</p>
				</div>
				
				<div id="hero-content" className="absolute inset-0 flex items-center justify-between px-10">
					<p id="hero-copy"
					   className={"absolute z-10 right-10 w-105 text-[20px] lg:text-[24px] font-medium tracking-tighter"}
					   aria-label={"Optimized to lift, insulate, and grip in real time. korvo makes the mundane feel groundbreaking."}>Optimized
						to lift, insulate, and grip in real time. Korvo makes the mundane feel groundbreaking.</p>
					
					<div id="ai-hype"
					     className="absolute right-10 left-10 z-20 flex justify-between items-center opacity-0 px-20">
						<h2 className={"uppercase text-[45px] font-semibold tracking-tighter leading-11 scale-y-105"}
						    aria-label={"isn’t just a coaster."}>isn’t just
							a coaster.</h2>
						
						<p className={"text-[25px] tracking-tighter font-medium scale-y-105"}
						   aria-label={"Korvo isn't just a coaster. It's a paradigm shift in tabletop infrastructure."}>
							Korvo isn't just a coaster. It's a paradigm shift in tabletop infrastructure.
						</p>
					</div>
				</div>
				
				<Canvas className={""}>
					<ambientLight intensity={1.5}/>
					<directionalLight position={[3, 5, 2]} intensity={5}/>
					<AnimatedCork/>
				</Canvas>
			
			</div>
		</section>
	);
};