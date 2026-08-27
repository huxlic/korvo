import {create} from "zustand";
import type {MenuStore} from "../types.ts";

const useMenuStore = create<MenuStore>((set) => ({
	isMenuOpen: false,
	toggleMenu: () => set((state) => ({isMenuOpen: !state.isMenuOpen})),
}));

export default useMenuStore;