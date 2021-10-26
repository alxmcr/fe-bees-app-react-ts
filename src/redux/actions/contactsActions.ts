import { ContactsAction } from "../../@types/appReduxTypes";
import { Contact } from "../../@types/appTypes";

export const addContactAction = (contact: Contact): ContactsAction => ({
    type: "contacts/add",
    payload: contact
});

export const removeContactAction = (contactId: number): ContactsAction => ({
    type: "contacts/remove",
    payload: contactId
});

export const loadingContactsAction = (): ContactsAction => ({
    type: "contacts/loading",
});

export const fillContactsAction = (contacts: Contact[]): ContactsAction => ({
    type: "contacts/fill",
    payload: contacts
});

export const errorContactsAction = (): ContactsAction => ({
    type: "contacts/error",
});