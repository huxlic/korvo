import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Cork from "../models/Cork.tsx";
import cutting_mat from "../../assets/images/cutting_table.jpg"

export const Hero = () => {
	
	
	
	return (
		<>
			<section id="hero" className={"h-screen bg-cover bg-bottom-right "} style={{backgroundImage: `url(${cutting_mat})`}}>
				<Canvas>
					<ambientLight intensity={1.5}/>
					<directionalLight position={[3, 5, 2]} intensity={5}/>
					<Cork scale={0.32} />
					<OrbitControls enableRotate={true} enableZoom={false} />
				</Canvas>
			</section>
		</>
	);
};