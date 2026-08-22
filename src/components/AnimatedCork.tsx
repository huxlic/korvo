import Cork from "./models/Cork.tsx";
import {useRef} from "react";
import * as THREE from "three";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const AnimatedCork = () => {
	const corkRef = useRef<THREE.Group>(null!);
	
	useGSAP(() => {
		gsap.to(corkRef.current.rotation, {
			y: Math.PI * 2,
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				end: "+=1000",
				scrub: 1,
			},
		});
	}, []);
	
	return (
		<Cork ref={corkRef} scale={0.32}/>
	);
};

export default AnimatedCork;