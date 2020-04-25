import React from 'react'
import { Environment } from "relay-runtime"

export interface AppContextProps {
	username: string;
	loggedInEnvironment: Environment | null;
}
export const AppContext = React.createContext<AppContextProps>({
	username: "",
	loggedInEnvironment: null,
});

