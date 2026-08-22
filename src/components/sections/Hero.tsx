import { Canvas } from "@react-three/fiber";
import cutting_mat from "../../assets/images/cutting_table.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCork from "../AnimatedCork.tsx";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
	return (
		<section id="hero" className={"relative w-full h-[500vh]"}>
			<div
				className={"sticky top-0 h-screen bg-cover bg-bottom-right "}
				style={{ backgroundImage: `url(${cutting_mat})` }}
			>
				<Canvas>
					<ambientLight intensity={1.5} />
					<directionalLight position={[3, 5, 2]} intensity={5} />
					<AnimatedCork/>
				</Canvas>
			</div>
		</section>
	);
};