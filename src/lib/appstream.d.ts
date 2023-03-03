
declare enum Elements
{
	TOOLBAR = "toolbar"
}

declare enum Options
{
	HIDDEN_ELEMENTS = "hiddenElements"
}

declare interface IEmbedOptions
{
	sessionURL: string 
	userInterfaceConfig: {hiddenElements: Elements[]}
}

declare class Embed
{
	constructor(elementId: string, options: IEmbedOptions)

	static Elements: typeof Elements
	static Options: typeof Options
}

declare global
{
	interface Window 
	{
		AppStream: {
			Embed: typeof Embed
		}
	}
}

export {};