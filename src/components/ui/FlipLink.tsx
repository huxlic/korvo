import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface FlipLinkProps {
	children: React.ReactNode;
	href: string;
}

export const FlipLink = ({children, href}: FlipLinkProps) => {
	const containerRef = useRef<HTMLAnchorElement>(null);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);
	
	const handleEnter = () => timelineRef.current?.play();
	const handleLeave = () => timelineRef.current?.reverse();
	const handleClick = () => tlRef.current?.play();
	
	useGSAP(
		() => {
			const splitPrimary = SplitText.create(".primary", {
				type: "chars",
				charsClass: "inline-block",
			});
			
			const splitClone = SplitText.create(".clone", {
				type: "chars",
				charsClass: "inline-block",
			});
			
			const tl = gsap.timeline({
				paused: true,
				defaults: {
					duration: 0.1,
					stagger: { each: 0.03, from: "end" },
					ease: "bounce.out",
				},
			});
			
			tl.fromTo(
				splitPrimary.chars,
				{yPercent: 0},
				{yPercent: -100},
			).fromTo(
				splitClone.chars,
				{yPercent: 100},
				{yPercent: 0},
				"<",
			);
			
			timelineRef.current = tl;
		},
		{scope: containerRef},
	);
	
	return (
		<a
			href={href}
			className="relative scale-y-105 inline-block uppercase overflow-hidden"
			ref={containerRef}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			onClick={handleClick}
		>
			<span className="primary">{children}</span>
			<span className="clone absolute inset-0">{children}</span>
			<span className="absolute left-0 bottom-0 w-full h-px dashline" />
		</a>
	);
};