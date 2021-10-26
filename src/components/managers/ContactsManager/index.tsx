import { useState } from "react";
import { ContactsManagerProps } from "../../../@types/appPropsTypes";
import { useContacts } from "../../../hooks/useContacts";
import { ContactsPagination } from "../ContactsPagination";
import { ContactsTable } from "../ContactsTable";
import "./ContactsManager.scss";

export const ContactsManager = ({ textSearch }: ContactsManagerProps) => {
  const limit = 3;
  const [page, setPage] = useState<number>(1);
  const { contacts, loadingContacts, errorContacts } = useContacts(
    textSearch,
    page,
    limit
  );

  return (
    <section className="contacts-manager">
      <div className="contacts-manager__body">
        {loadingContacts ? (
          <p className="contacts-manager__message">Loading...</p>
        ) : null}
        {!loadingContacts && !errorContacts ? (
          <>
            <ContactsTable contacts={contacts} />
          </>
        ) : null}
      </div>
      <ContactsPagination
        page={page}
        setPage={setPage}
        nroContacts={contacts?.length}
      />
    </section>
  );
};
