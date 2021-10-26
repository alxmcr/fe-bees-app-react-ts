import { createStore } from "redux";
import { WindowWithDevTools } from "../@types/appReduxTypes";
import { contactsReducers } from "./reducers/contactsReducers";

const isReduxDevtoolsExtensionExist =
    (arg: Window | WindowWithDevTools):
        arg is WindowWithDevTools => {
        return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
    }

export const reduxStore = createStore(contactsReducers,
    isReduxDevtoolsExtensionExist(window) ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : undefined)
