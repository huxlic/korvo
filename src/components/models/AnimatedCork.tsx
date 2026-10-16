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
		cork.rotation.order = "YXZ";
		
		const TILT = -Math.PI / 6;   // ~30° lean
		
		tl.to(cork.scale,    { x: 0.5, y: 0.5, z: 0.5, duration: 2 })
			.to(cork.rotation, { y: -Math.PI, duration: 1 }, "<20%")                 // A: Y half-turn
			.to(cork.rotation, { x: TILT, duration: 0.5, repeat: 1, yoyo: true, }, "<")                        // lean in, then back to 0
			.to(cork.rotation, { x: Math.PI, duration: 1 })
			.to(cork.scale,    { x: 0.24, y: 0.24, z: 0.24, duration: 1.4 });
		
	}, []);
	
	return (
		<Cork ref={corkRef} scale={0.32} rotation={[0, 0, 0]}/>
	);
};

export default AnimatedCork;