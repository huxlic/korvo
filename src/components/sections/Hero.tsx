import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

export const Hero = () => {
	return (
		<>
			<section id="hero" className={"h-screen"}>
				<Canvas>
					<ambientLight intensity={0.6}/>
					<directionalLight position={[3, 5, 2]} intensity={1.5}/>
					{/*<Cork scale={.3} />*/}
					<OrbitControls enableRotate={true} enableZoom={false} />
				</Canvas>
			</section>
		</>
	);
};