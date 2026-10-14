const IntroContent = () => {
	return (
		<div id="intro-content"
		     className="absolute z-9 inset-0 flex items-center justify-between px-10">
			<p id="intro-copy"
			   className={"absolute z-10 right-10 w-74 lg:w-102 leading-6 text-[18px] lg:leading-normal lg:text-[20px] lg:text-[24px] font-medium tracking-tighter"}
			   aria-label={"Optimized to lift, insulate, and grip in real time. korvo makes the mundane feel groundbreaking."}>Optimized
				to lift, insulate, and grip in real time. Korvo makes the mundane feel groundbreaking.</p>
			
			<div id="ai-hype"
			     className="w-full absolute inset-0 pt-24 md:pt-10 pb-10 px-5 md:right-10 md:left-10 z-20 flex flex-col md:flex-row justify-between md:items-center md:gap-0 md:px-10 lg:px-20">
				<h2
					id="hype-title"
					className={"w-full sm:w-99 md:w-43.75 lg:w-62 uppercase text-[50px] sm:text-[70px] md:text-[32px] lg:text-[45px] font-semibold tracking-tighter leading-14 sm:leading-18 md:leading-8 lg:leading-11 scale-y-105 will-change-transform"}
					aria-label={"isn’t just a coaster."}>isn’t just
					a coaster.</h2>
				
				<p
					id="hype-desc"
					className={"sm:w-154 md:w-75 lg:w-75 text-[24px] sm:text-[34px] md:text-[18px] lg:text-[25px] text-end md:text-start leading-8 sm:leading-10 md:leading-6 lg:leading-8 tracking-tighter font-medium scale-y-105 will-change-transform"}
					aria-label={"Korvo isn't just a coaster. It's a paradigm shift in tabletop infrastructure."}>
					Korvo isn't just a coaster. It's a paradigm shift in tabletop infrastructure.
				</p>
			</div>
		
		</div>
	)
}
export default IntroContent
