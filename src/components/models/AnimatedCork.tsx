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
				trigger: "#hero",
				start: "top top",
				end: "bottom bottom",
				scrub: 1,
			},
		});
		
		tl.to(corkRef.current.scale, {
				x: 0.6,
				y: 0.6,
				z: 0.6,
				duration: 1,
			})
			.to(corkRef.current.rotation, {
				x: Math.PI / 2,
				y: -Math.PI * 2,
				duration: 1,
			}, "<30%")
			.to(corkRef.current.rotation, {
				x: 0,
				y: -Math.PI * 2,
				duration: 1,
			})
			.to(corkRef.current.scale, {
				x: 0.2,
				y: 0.2,
				z: 0.2,
				duration: 1,
			});
	}, []);
	
	return (
		<Cork ref={corkRef} scale={0.32} rotation={[0, 0, 0]}/>
	);
};

export default AnimatedCork;