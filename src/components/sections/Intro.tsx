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
import PoweredBy from "../ui/intro/PoweredBy.tsx";
import {useMediaQuery} from "react-responsive";

export const Intro = () => {
	const {setActiveSection} = useNavStore();
	const [fontsReady, setFontsReady] = useState(false);
	const isMdUp = useMediaQuery({minWidth: 768});
	
	useEffect(() => {
		document.fonts.ready.then(() => setFontsReady(true)).catch((err) => console.log(err)
		);
	}, []);
	
	const hypeX = isMdUp ? 0 : 40;
	const hypeY = isMdUp ? 40 : 0;
	
	useGSAP(() => {
		if (!fontsReady) return;
		
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#intro",
				start: "top top",
				end: "bottom bottom",
				pin: "#intro-stage",
				pinSpacing: false,
				scrub: 0.5,
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
		
		const poweredByAi = SplitText.create("#powered-by-ai", {
			type: "words, chars",
			
		})
		
		const korvoOne = SplitText.create("#korvo-1", {
			type: "chars",
			charsClass: "inline-block",
			mask: "lines"
		})
		
		const aiCooked = SplitText.create("#ai-cooked", {
			type: "lines",
			charsClass: "w-full block",
			mask: "lines"
		})
		
		tl
			
			.to("#bg-layer", {
				scale: 0.3,
				rotation: 20,
				ease: "none",
				scrollTrigger: {
					trigger: "#intro",
					start: "top top",
					scrub: true,
				},
			})
			
			.to("#canvas", {
				backgroundColor: "#1A1513",
				backdropFilter: "blur(4px)",
				duration: 4
			}, "<100%")
			
			.to(introCopy.lines, {
				xPercent: 5,
				filter: "blur(10px)",
				opacity: 0,
				duration: 1.5,
				stagger: 0.2,
			}, "<")
			
			.to(introCardHeader.lines, {
				yPercent: 100,
				stagger: {
					each: 0.05,
					from: "end"
				},
				ease: "circ.in",
				duration: 2
			}, "<")
			.to(introCardDesc.lines, {
				yPercent: 100,
				stagger: {
					each: 0.05,
					from: "end"
				},
				ease: "circ.in",
				duration: 2
			}, "<")
			.to("#dashline", {
				width: 0,
				ease: "circ.in",
				duration: 2
			}, "<")
			.to("#intro-card", {
				opacity: 0,
				display: "none",
				duration: 2,
				delay: 1
			}, "<80%")
			
			.to(hypeTitle.chars, {
				opacity: 1,
				stagger: {
					each: 0.25,
					from: "end"
				},
				ease: "circ.in",
				duration: 2
			}, "sync")
			.to(hypeDesc.chars, {
				opacity: 1,
				stagger: 0.05,
				ease: "circ.in",
				duration: 2
			}, "sync")
			
			.from("#hype-title", {
				yPercent: -hypeY,
				xPercent: hypeX,
				ease: "circ.inOut",
				duration: 8
			}, "<")
			.from("#hype-desc", {
				yPercent: hypeY,
				xPercent: -hypeX,
				ease: "circ.inOut",
				duration: 8
			}, "<")
			
			.from("#drive-dash", {
				xPercent: 100,
				duration: 8
			})
			.from("#drive", {
				opacity: 0,
				duration: 8
			}, "<")
			
			.to("#hype-title", {
				opacity: 0,
				yPercent: hypeY,
				xPercent: -hypeX,
				ease: "circ.inOut",
				duration: 8
			}, "+=2")
			.to("#hype-desc", {
				opacity: 0,
				yPercent: -hypeY,
				xPercent: hypeX,
				ease: "circ.inOut",
				duration: 8
			}, "<")
			.to("#canvas", {
				backgroundImage: "linear-gradient(212deg, #1a1513 67%, #3c2010 100%)"
			})
			.from(poweredByAi.chars, {
				opacity: 0,
				stagger: 0.25,
				scale: 1.1,
				filter: "blur(8px)",
				duration: 1
			})
			.from(korvoOne.chars, {
				yPercent: 100,
				stagger: 0.08,
			}, "<20%")
			.from("#asterisk", {
				scale: 0,
				duration: 2,
				ease: "circ.out"
			})
			
			.from(aiCooked.lines, {
				yPercent: 100,
				stagger: 2,
				duration: 8
			}, "<")
		
		
	}, {dependencies: [fontsReady, hypeX, hypeY], revertOnUpdate: true})
	
	return (
		<section id="intro" className={"relative w-full h-[300vh]"}>
			<div
				id="intro-stage"
				className={"relative top-0 h-dvh overflow-hidden"}
			>
				<div
					id="bg-layer"
					className="absolute inset-0 scale-105 bg-no-repeat bg-cover bg-bottom-right"
					style={{backgroundImage: `url(${cutting_mat})`}}
				/>
				<IntroCard/>
				<IntroContent/>
				<Drive/>
				<PoweredBy/>
				
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