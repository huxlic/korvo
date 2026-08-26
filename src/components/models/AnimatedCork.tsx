import Cork from "./Cork.tsx";
import {useRef} from "react";
import * as THREE from "three";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const AnimatedCork = () => {
	const corkRef = useRef<THREE.Group>(null!);
	
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				end: "bottom bottom",
				scrub: 1,
			},
		});
		
		tl.to(corkRef.current.scale, {
				x: 0.4,
				y: 0.4,
				duration: 1,
			})
			.to(corkRef.current.rotation, {
				x: -Math.PI * 2,
				y: -Math.PI * 2,
				duration: 1,
			})
			.to(corkRef.current.scale, {
				x: 0.6,
				y: 0.6,
				duration: 1,
			}, "<")
			.to(corkRef.current.scale, {
				x: 0.2,
				y: 0.2,
				duration: 1,
			});
	}, []);
	
	return (
		<Cork ref={corkRef} scale={0.32}/>
	);
};

export default AnimatedCork;