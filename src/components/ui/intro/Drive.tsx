const Drive = () => {
	return (
		<div className="absolute bottom-5 z-10 right-8 overflow-hidden">
			<span id="drive-dash" className="absolute left-0 top-0 w-full h-px dashline"/>
			<p id="drive" className={"uppercase tracking-tighter font-semibold text-[clamp(11px,3vw,24px)] md:text-[11px] text-end mt-[20%] leading-none will-change-transform"}>⁕
				manual <br/> programming</p>
		</div>
	)
}
export default Drive
