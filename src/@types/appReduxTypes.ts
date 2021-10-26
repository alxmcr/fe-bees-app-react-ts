import { StoreEnhancer } from "redux";
import { Contact } from "./appTypes";

export interface ContactsState {
    contacts: Contact[];
    loading: boolean;
    error: boolean;
}

export interface ContactsAction {
    type: "contacts/add" | "contacts/remove" | "contacts/fill" | "contacts/loading" | "contacts/error" | "contacts/loading";
    payload?: Contact | Contact[] | number | boolean;
}

export interface ContactsContextProps {
    state: ContactsState;
    dispatch: React.Dispatch<ContactsAction>;
}

export type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>
}

export interface ReduxProviderProps {
    children: React.ReactNode;
}