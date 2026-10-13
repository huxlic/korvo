import {Canvas} from "@react-three/fiber";
import cutting_mat from "../../assets/images/cutting_table.jpg";
import gsap from "gsap";
import AnimatedCork from "../models/AnimatedCork.tsx";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import useNavStore from "../../store/useNavStore.ts";
import {useEffect, useState} from "react";
import IntroCard from "../ui/intro/IntroCard.tsx";
import IntroContent from "../ui/intro/IntroContent.tsx";
import Drive from "../ui/intro/Drive.tsx";

export const Intro = () => {
	const {setActiveSection} = useNavStore();
	const [fontsReady, setFontsReady] = useState(false);
	
	useEffect(() => {
		document.fonts.ready.then(() => setFontsReady(true));
	}, []);
	
	useGSAP(() => {
		
		if (!fontsReady) return;
		
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#intro",
				start: "top top",
				end: "bottom bottom",
				pin: "#intro-stage",
				pinSpacing: false,
				scrub: 1,
				onEnter: () => setActiveSection("intro")
			}
		});
		
		const introCopy = SplitText.create("#intro-copy", {
			type: "lines",
			charsClass: "w-max"
		})
		
		const hypeTitle = SplitText.create("#hype-title", {
			type: "words, chars",
			charsClass: "opacity-0 inline-block",
		})
		const hypeDesc = SplitText.create("#hype-desc", {
			type: "chars, words",
			charsClass: "opacity-0 inline-block",
		})
		
		const introCardHeader = SplitText.create("#intro-card-header", {
			type: "lines",
			linesClass: "line",
			mask: "lines"
		})
		const introCardDesc = SplitText.create("#intro-card-desc", {
			type: "lines",
			linesClass: "line",
			mask: "lines"
		})
		
		const poweredByMl = SplitText.create("#powered-by-ml", {
			type: "words, chars",
			charsClass: "inline-block",
			
		})
		
		const korvoOne = SplitText.create("#korvo-1", {
			type: "chars",
			charsClass: "inline-block",
			mask: "lines"
		})
		
		tl
			.to("#canvas", {
				backgroundColor: "#1A1513",
				backdropFilter: "blur(4px)"
			})
			.to("#bg-layer", {
				scale: 0.3,
				rotation: 20,
				ease: "none",
				scrollTrigger: {
					trigger: "#intro",
					start: "top top",
					scrub: true,
				},
			}, "<")
			.to(introCopy.lines, {
				x: 40,
				filter: "blur(8px)",
				opacity: 0,
				stagger: 0.05
			}, "<")
			.to(introCardHeader.lines, {
				yPercent: 100,
				stagger: {
					each: 0.05,
					from: "end"
				},
				duration: 1,
				ease: "circ.in"
			}, "<")
			.to(introCardDesc.lines, {
				yPercent: 100,
				stagger: {
					each: 0.05,
					from: "end"
				},
				ease: "circ.in",
				duration: 1,
			}, "<")
			.to("#dashline", {
				width: 0,
				ease: "circ.in"
			}, "<")
			.to("#intro-card", {
				opacity: 0,
				display: "none",
			})
			.to(introCopy.elements, {
				display: "none"
			})
			.to("#ai-hype", {
				opacity: 1
			}, "<10%")
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
				xPercent: 50,
				ease: "circ.inOut"
			}, "<")
			.from("#hype-desc", {
				xPercent: -50,
				ease: "circ.inOut"
			}, "<")
			.from("#drive", {
				opacity: 0,
				xPercent: 100
			})
			.to("#hype-title", {
				opacity: 0,
				xPercent: -40,
				ease: "circ.inOut"
			})
			.to("#hype-desc", {
				opacity: 0,
				xPercent: 40,
				ease: "circ.inOut"
			}, "<")
			.to("#canvas", {
				backgroundImage: "linear-gradient(212deg, #1a1513 67%, #3c2010 100%)"
			})
			.from(poweredByMl.chars, {
				opacity: 0,
				stagger: 0.1,
				scale: 1.1,
				filter: "blur(10px)",
			})
			.from(korvoOne.chars, {
				yPercent: 100,
				stagger: 0.08,
			}, "<20%")
			.from("#asterisk", {
				scale: 0,
			})
			
		
	}, {dependencies: [fontsReady], revertOnUpdate: true})
	
	return (
		<section id="intro" className={"relative w-full h-[300vh]"}>
			<div
				id="intro-stage"
				className={"top-0 h-dvh overflow-hidden"}
			>
				<div
					id="bg-layer"
					className="absolute inset-0 scale-105 bg-no-repeat bg-cover bg-bottom-left  "
					style={{backgroundImage: `url(${cutting_mat})`}}
				/>
				<IntroCard/>
				<IntroContent/>
				<Drive/>
				
				<div id="powered-by"
				     className="powered-by w-max absolute inset-0 z-10 flex flex-col justify-between items-center justify-self-center py-20">
					<div className="flex flex-col justify-center items-end leading-none">
						<div className="flex items-start">
							<p id="powered-by-ml" className={"text-[102px] font-semibold tracking-tighter"}>Powered by
								ML</p>
							<span id="asterisk" className={"text-[35px] font-semibold leading-none mt-3"}>*</span>
						</div>
						<span
							id="korvo-1"
							className={"h-max overflow-hidden leading-none text-ember-accent text-[21px] font-semibold tracking-tighter"}>KORVO-1</span>
					</div>
					
					<p className={"w-full font-semibold uppercase tracking-tighter leading-5 flex justify-end text-end"}>
						We asked for a coaster.<br/>
						AI pitched a platform.<br/>
						Seed round closed.
					</p>
				</div>
				
				<div id="canvas" className="absolute inset-0 z-5">
					<Canvas camera={{position: [0, 0, 8], fov: 50}}>
						<ambientLight intensity={1.5}/>
						<directionalLight position={[3, 5, 2]} intensity={5}/>
						<AnimatedCork/>
					</Canvas>
				</div>
			</div>
		</section>
	);
};