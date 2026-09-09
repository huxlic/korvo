import * as React from "react";
import {ScrollSmoother} from "gsap/ScrollSmoother";

const handleNavClick = (e: React.MouseEvent, targetId: string) => {
	e.preventDefault();
	const smoother = ScrollSmoother.get();
	smoother?.scrollTo(targetId, true, "top top");
}

export default handleNavClick;