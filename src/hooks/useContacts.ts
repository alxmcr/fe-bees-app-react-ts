import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactsState } from "../@types/appReduxTypes";
import { fillContactsAction } from "../redux/actions/contactsActions";
import { getContacts } from "../services/contactsServices";

export const useContacts = (textSearch: string = "", page: number = 5, limit: number = 3) => {
    const contacts = useSelector((state: ContactsState) => state.contacts);
    const dispatch = useDispatch();
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

    return { contacts, loadingContacts, errorContacts };
}