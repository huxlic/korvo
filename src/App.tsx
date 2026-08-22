import {Navbar} from "./components/sections/Navbar.tsx";
import {Hero} from "./components/sections/Hero.tsx";
// import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
	// useGSAP(() => {
	// 	const smoother = ScrollSmoother.create({
	// 		wrapper: "#smooth-wrapper",
	// 		content: "#smooth-content",
	// 		smooth: 2,
	// 		effects: true,
	// 	});
	//
	// 	// Force the smoother to sync its internal scroll position immediately
	// 	smoother.scrollTop(smoother.scrollTop());
	//
	// 	requestAnimationFrame(() => {
	// 		ScrollTrigger.refresh();
	// 	});
	//
	// 	return () => smoother?.kill();
	// }, []);
	
	return (
		<div className="relative w-full font-work-sans text-warm-cream selection:bg-ember-accent">
			<Navbar />
			<div
				id="smooth-wrapper"
			>
				<div id="smooth-content" className="w-full h-[500vh]">
					<Hero />
				</div>
			</div>
		</div>
	);
};
export default App
