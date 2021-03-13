// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

declare module "*.css" {
	const content: { [className: string]: string };
	export = content;
}
declare module "*.png" {
	const value: any;
	export = value;
}

declare module "*.sass" {
	const styles: { [className: string]: string };
	export = styles;
}

declare module "*.module.sass" {
	const styles: { [className: string]: string };
	export = styles;
}