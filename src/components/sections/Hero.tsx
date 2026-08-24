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
			})
		
		
	}, [])
	
	return (
		<section id="hero" className={"relative w-full h-[1000vh]"}>
			<div
				className={"sticky top-0 h-screen bg-cover bg-bottom-right "}
				style={{backgroundImage: `url(${cutting_mat})`}}
			>
				<div
					className="absolute z-10 mx-10 left-0 bottom-6 w-60 h-70 bg-linear-to-br from-white/15 to-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-[#FFFFFF26] backdrop-blur-lg backdrop-saturate-100 ">
				</div>
				
				<div id="hero-content" className="absolute inset-0 flex items-center justify-between px-10">
					<p id="hero-copy"
					   className={"absolute z-10 right-10 w-105 text-[20px] lg:text-[24px] font-medium tracking-tighter"}>Designed
						to
						lift,
						insulate, and grip in all
						the right ways. Korvo makes the
						simplest moment feel considered.</p>
					
					<div className="hidden w-full flex justify-between items-center">
						<h2 className={"uppercase text-[36px] font-semibold tracking-tighter"}>isn’t just
							a coaster.</h2>
						
						<p>
							Korvo isn’t just a
							coaster. It’s the result
							of unprecedented AI*
							breakthroughs.
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