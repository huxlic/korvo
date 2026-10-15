import {useRef} from "react";
import * as THREE from "three";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Cork from "./Cork.tsx";

const AnimatedCork = () => {
	const corkRef = useRef<THREE.Group>(null!);
	
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#intro",
				start: "top top",
				end: "bottom bottom",
				scrub: 1,
			},
		});
		const cork = corkRef.current;
		
		// tl.to(corkRef.current.scale, {
		// 		x: 0.5,
		// 		y: 0.5,
		// 		z: 0.5,
		// 		duration: 1,
		// 	})
		// 	.to(corkRef.current.rotation, {
		// 		x: -Math.PI,
		// 		y: -Math.PI,
		// 		duration: 1,
		// 	}, "<50%")
		// 	.to(corkRef.current.rotation, {
		// 		x: 0,
		// 		y: -Math.PI * 2,
		// 		duration: 1,
		// 	})
		// 	.to(corkRef.current.scale, {
		// 		x: 0.24,
		// 		y: 0.24,
		// 		z: 0.24,
		// 		duration: 1,
		// 	});
		
		tl.to(cork.scale,    { x: 0.5,  y: 0.5,  z: 0.5,  duration: 1 })       // grow toward camera
			.to(cork.rotation, { y: -Math.PI, x: 0, duration: 1 }, "<40%")                // A: Y half-turn, back face shows
			.to(cork.rotation, { x: -Math.PI, duration: 1 })                     // B: X half-turn, cup returns
			.to(cork.scale,    { x: 0.24, y: 0.24, z: 0.24, duration: 1.4 })
		
	}, []);
	
	return (
		<Cork ref={corkRef} scale={0.32} rotation={[0, 0, 0]}/>
	);
};

export default AnimatedCork;