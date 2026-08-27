export interface NavLinks {
	label: string;
	href: string;
}

export interface MenuStore {
	isMenuOpen: boolean;
	toggleMenu: () => void;
}