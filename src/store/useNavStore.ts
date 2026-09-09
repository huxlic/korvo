import {create} from 'zustand'

interface NavState {
	activeSection: string
	setActiveSection: (section: string) => void
}

const useNavStore = create<NavState>((set) => ({
	activeSection: '',
	setActiveSection: (section) => set({activeSection: section}),
}))

export default useNavStore;