
const IntroCard = () => {
	return (
		<div
			id="intro-card"
			className="flex flex-col justify-between absolute z-10 ml-8 lg:ml-10 left-0 bottom-4 lg:bottom-6 box-border px-3 py-3 lg:px-4 lg:py-5 w-43.25 lg:w-60 bg-linear-to-br from-white/15 to-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-[#FFFFFF26] backdrop-blur-lg backdrop-saturate-100 ">
			<p id="intro-card-header"
			   aria-label={"lusion's design, deconstructed, studied and rebuilt by hux."}
			   className={"text-[16px] h-max lg:text-[20px] pb-[25%] uppercase font-semibold scale-y-105 tracking-tighter leading-4.5 lg:leading-6 overflow-hidden"}>lusion's
				design,
				deconstructed, studied
				and rebuilt by hux.
			</p>
			
			<span id="dashline" className="w-full h-px dashline"/>
			
			<p id="intro-card-desc"
			   className={"text-end text-[11px] lg:text-[15px] pt-[10%] font-medium tracking-tighter"}
			   aria-label={"Quite possibly the most unnecessarily advanced coaster."}>Quite
				possibly the most
				unnecessarily
				advanced coaster.</p>
		</div>
	)
}
export default IntroCard
