export interface NavLinks {
	label: string;
	href: string;
}

export interface OpenMenu {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}