import { ContactTableProps } from "../../../@types/appPropsTypes";
import { ContactRow } from "../ContactRow";
import "./ContactsTable.scss";

export const ContactsTable = ({ contacts = [] }: ContactTableProps) => {
  if (contacts.length === 0) {
    return (
      <div className="contacts-manager__errors">
        <p className="contacts-manager__message contacts-manager__message--error">
          No hay contactos registrados.
        </p>
      </div>
    );
  }

  return (
    <div className="contacts-manager__table">
      <header className="contacts-manager__header">
        <p className="contacts-manager__subtitle">Nombre</p>
        <p className="contacts-manager__subtitle">Descripción</p>
      </header>
      {contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
