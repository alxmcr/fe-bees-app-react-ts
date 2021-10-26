import { useContext, useEffect, useState } from "react";
import { Contact } from "../@types/appTypes";
import { ContactsContext } from "../providers/ContactsProvider";
import { fillContactsAction } from "../redux/actions/contactsActions";
import { getContacts } from "../services/contactsServices";

export const useContacts = (textSearch: string = "", page: number = 5, limit: number = 3) => {
    const { state, dispatch } = useContext(ContactsContext);
    const [loadingContacts, setLoadingContacts] = useState(false);
    const [errorContacts, setErrorContacts] = useState(false);

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingContacts(true);

        getContacts(textSearch, page, limit, signal)
            .then((response) => {
                setErrorContacts(false);
                dispatch(fillContactsAction(response));
                setLoadingContacts(false);
            }).catch(() => {
                setErrorContacts(true);
            }).finally(() => {
                setLoadingContacts(false);
            });

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [textSearch, page, limit, dispatch])

    const contacts: Contact[] = state.contacts;
    return { contacts, loadingContacts, errorContacts };
}