import { Contact } from "./appTypes";

export interface ContactsProviderProps {
    children: React.ReactNode
}

export interface ContactCardProps {
    contact: Contact
}

export interface ContactTableProps {
    contacts: Contact[]
}

export interface ContactsPaginationProps {
    nroContacts: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ContactsActionsProps {
    textSearch: string;
    setTextSearch: React.Dispatch<React.SetStateAction<string>>;
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AppOverlayProps {
    showOverlay: boolean;
    children: React.ReactNode;
}

export interface ContactCreateCardProps {
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContactCreateFormProps {
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContactsManagerProps {
    textSearch: string;
}

export interface AddIconProps {
    className: string;
    width: number;
    height: number;
}
