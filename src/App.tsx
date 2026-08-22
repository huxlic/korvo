import {Navbar} from "./components/sections/Navbar.tsx";
import {Hero} from "./components/sections/Hero.tsx";

const App = () => {
	return (
		<>
			<div
				className={"w-full h-[500vh] font-work-sans text-warm-cream selection:bg-ember-accent"}>
				<Navbar/>
				<Hero/>
			</div>
		</>
	)
}
export default App
