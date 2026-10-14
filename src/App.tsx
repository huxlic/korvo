import {Navbar} from "./components/sections/Navbar.tsx";
import {Intro} from "./components/sections/Intro.tsx";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import gsap from "gsap";
import {MdLinks} from "./components/ui/MdLinks.tsx";
import {useGSAP} from "@gsap/react";
// import korvoLogo from "./assets/images/korvo-logo.svg"
//
// fetch(korvoLogo)
// 	.then(response => response.text())
// 	.then(svgText => {
// 		const base64Svg = `data:image/svg+xml;base64,${btoa(svgText)}`;
// 		console.log(
// 			'%c ',
// 			`background-image: url(${base64Svg});
// 				background-size: contain;
// 				background-repeat: no-repeat;
// 				padding: 40px;
// 				padding-bottom: 0px`
// 		);
// 	}).catch(e => console.log(e)
// );

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
	
	
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 2,
			effects: true,
			normalizeScroll: true
		})
	}, [])
	
	return (
		<div className="w-full font-work-sans text-warm-cream selection:bg-ember-accent select-none">
			<Navbar/>
			<div
				id="smooth-wrapper"
			>
				<div id="smooth-content" className="w-full ">
					<Intro/>
				</div>
			</div>
			<MdLinks/>
		</div>
	);
};
export default App
