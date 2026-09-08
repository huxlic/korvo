import {Navbar} from "./components/sections/Navbar.tsx";
import {Hero} from "./components/sections/Hero.tsx";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import gsap from "gsap";
import {MdLinks} from "./components/ui/MdLinks.tsx";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(SplitText)
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
		<div className="w-full font-work-sans text-warm-cream selection:bg-ember-accent">
			<Navbar/>
			<div
				id="smooth-wrapper"
			>
				<div id="smooth-content" className="w-full ">
					<Hero/>
				</div>
			</div>
			<MdLinks/>
		</div>
	);
};
export default App
