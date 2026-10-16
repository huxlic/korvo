
const PoweredBy = () => {
	return (
		<div id="powered-by"
		     className="powered-by w-max absolute inset-0 z-10 flex flex-col justify-between items-center justify-self-center px-5 pb-12 md:pb-20 md:px-0 pt-20">
			<div className="flex flex-col justify-center items-end leading-none">
				<div className="w-full flex items-start">
					<p id="powered-by-ai" className={"w-full text-[clamp(2rem,1.55rem+6vw,6.375rem)] font-semibold tracking-tighter"}>Powered by
						AI</p>
					<span id="asterisk" className={"text-[30px] sm:text-[50px] md:text-[30px] lg:text-[40px] font-semibold leading-none will-change-transform"}>⁕</span>
				</div>
				<span
					id="korvo-1"
					className={"h-max overflow-hidden leading-none text-ember-accent md:text-[clamp(0.8rem,0.7188rem+0.375vw,1rem)] font-semibold tracking-tighter"}>KORVO-1</span>
			</div>
			
			<p id="ai-cooked"
			   className={"w-full font-semibold uppercase tracking-tighter leading-7.5 md:leading-3.5 lg:leading-4.5 text-[28px] md:text-[13px] lg:text-[16px] text-start md:text-end"}>
				We asked for a coaster.<br/>
				AI pitched a platform.<br/>
				Seed round closed.
			</p>
			
		</div>
	)
}
export default PoweredBy
