import { createStore } from "redux";

export interface StoreState {
	IsDarkMode: boolean;
}

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export type TOGGLE_SIDEBAR = typeof TOGGLE_SIDEBAR;

export interface ToggleSidebar {
	type: TOGGLE_SIDEBAR;
}

// Reducer
export const reducer = (
	state: StoreState | undefined,
	action: ToggleSidebar,
): StoreState => {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return Object.assign({}, state, {
				isSidebarVisible: !state!.IsDarkMode,
			});
		default:
			return state!;
	}
};

export const initialState: StoreState = { IsDarkMode: true };
export const store = createStore<StoreState, ToggleSidebar, any, any>(
	reducer,
	initialState,
);
