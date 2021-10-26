import { useEffect, useState } from "react";
import { Contact } from "../@types/appTypes";
import { getContactById } from "../services/contactsServices";

export const useContact = (contactId: number = 0) => {
    const [contact, setContact] = useState<Contact | null>(null);
    const [loadingContact, setLoadingContact] = useState(false);
    const [errorContact, setErrorContact] = useState(false);

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingContact(true);

        getContactById(contactId, signal)
            .then((response) => {
                setContact(response);
                setLoadingContact(false);
            }).catch(() => {
                setErrorContact(true);
            }).finally(() => {
                setLoadingContact(false);
            });

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [contactId])

    return { contact, loadingContact, errorContact };
}