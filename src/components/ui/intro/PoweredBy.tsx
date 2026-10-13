
const PoweredBy = () => {
	return (
		<div id="powered-by"
		     className="powered-by w-max absolute inset-0 z-10 flex flex-col justify-between items-center justify-self-center py-20">
			<div className="flex flex-col justify-center items-end leading-none">
				<div className="flex items-start">
					<p id="powered-by-ml" className={"text-[102px] font-semibold tracking-tighter"}>Powered by
						AI</p>
					<span id="asterisk" className={"text-[40px] font-semibold leading-none mt-1"}>⁕</span>
				</div>
				<span
					id="korvo-1"
					className={"h-max overflow-hidden leading-none text-ember-accent text-[21px] font-semibold tracking-tighter"}>KORVO-1</span>
			</div>
			
			<p id="ai-cooked"
			   className={"w-full font-semibold uppercase tracking-tighter leading-5 text-end"}>
				We asked for a coaster.<br/>
				AI pitched a platform.<br/>
				Seed round closed.
			</p>
		</div>
	)
}
export default PoweredBy
