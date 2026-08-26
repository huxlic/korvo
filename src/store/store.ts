import {create} from "zustand";
import type {OpenMenu} from "../types.ts";

const useOpenMenu = create<OpenMenu>()((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set(() => ({isOpen})),
}))

export default useOpenMenu;