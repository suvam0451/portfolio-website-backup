import React, { createContext } from "react";

export interface ISidebarContext {
	submoduleList: number[] | null;
	seriesList: number[] | null;
}
export const SidebarContext = createContext<ISidebarContext>({
	submoduleList: [],
	seriesList: [],
});
