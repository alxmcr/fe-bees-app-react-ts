import { Contact, NewContact } from "../@types/appTypes";

const API_URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

export const getAllContacts = async (signal: AbortSignal): Promise<Contact[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/api/users`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const getContacts = async (textSearch: string = "", page: number = 5, limit: number = 3, signal: AbortSignal): Promise<Contact[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    let url = `${API_URL}/api/users`;

    if (textSearch?.length > 0) {
        url += `?q=${textSearch}`;
    } else {
        url += `?_page=${page}&_limit=${limit}`;
    }
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const getContactById = async (contactId: number = 0, signal: AbortSignal): Promise<Contact> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/api/users/${contactId}`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const searchContacts = async (textSearch: string = "", signal: AbortSignal): Promise<Contact[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/api/users?q=${textSearch}`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const getContactsPaginated = async (page: number = 5, limit: number = 3, signal: AbortSignal): Promise<Contact[]> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/api/users?_page=${page}&_limit=${limit}`;
    const response = await fetch(url, requestOptions);

    if (response.status !== 200) {
        return Promise.reject(response);
    }

    return response.json();
}

export const addContact = async (newContact: NewContact, signal: AbortSignal): Promise<Contact> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const newContactJSON = JSON.stringify({ ...newContact });

    const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: newContactJSON,
        signal
    };

    const url = `${API_URL}/api/users`;
    const response = await fetch(url, requestOptions);

    if (response.status === 201) {
        return response.json();
    }
    return Promise.reject(response);

}

export const removeContact = async (userId: number, signal: AbortSignal): Promise<Contact | string> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'DELETE',
        headers: myHeaders,
        signal
    };

    const url = `${API_URL}/api/users/${userId}`;

    const response = await fetch(url, requestOptions);

    if (response.status === 200) {
        return "200";
    }
    return Promise.reject(response);
}