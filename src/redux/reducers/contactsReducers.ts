import { ContactsState, ContactsAction } from "../../@types/appReduxTypes"
import { Contact } from "../../@types/appTypes";

export const initialStateContacts: ContactsState = {
    contacts: [],
    loading: false,
    error: false,
};

export const contactsReducers = (
    state: ContactsState = initialStateContacts,
    action: ContactsAction
): ContactsState => {
    switch (action.type) {
        case "contacts/loading":
            return {
                ...state,
                loading: true
            };
        case "contacts/error":
            return {
                ...state,
                loading: false,
                error: true
            };
        case "contacts/add":
            return {
                ...state,
                loading: false,
                error: false,
                contacts: [...state.contacts, action.payload as Contact]
            };
        case "contacts/remove":
            const contactIdToRemove = action.payload as number
            return {
                ...state,
                loading: false,
                error: false,
                contacts: state.contacts.filter(contact => contact.id !== contactIdToRemove)
            };
        case "contacts/fill":
            return {
                ...state,
                loading: false,
                error: false,
                contacts: action.payload as Contact[]
            };
        default:
            return state

    }
}