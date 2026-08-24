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
		// .to()
		
		
	}, [])
	
	return (
		<section id="hero" className={"relative w-full h-[1000vh]"}>
			<div
				className={"sticky top-0 h-screen bg-cover bg-bottom-right "}
				style={{backgroundImage: `url(${cutting_mat})`}}
			>
				<div id="hero-content" className="absolute inset-0 flex items-center justify-between px-10">
					<div
						className="glass-card w-100 h-100 border border-[#FFFFFF26] backdrop-blur-lg backdrop-saturate-100 ">
					
					</div>
					
					<p id="hero-copy"
					   className={"w-105 text-[20px] lg:text-[24px] font-medium tracking-tighter"}>Designed to lift,
						insulate, and grip in all
						the right ways. Korvo makes the
						simplest moment feel considered.</p>
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