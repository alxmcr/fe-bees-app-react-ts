import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { ContactPageParams } from "../../@types/appRouterTypes";
import { getContactIdFromParams } from "../../helpers/helpers";
import { useContact } from "../../hooks/useContact";
import { removeContactAction } from "../../redux/actions/contactsActions";
import { removeContact } from "../../services/contactsServices";
import "./ContactPage.scss";

export const ContactPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<ContactPageParams>();
  const [isRemoving, setIsRemoving] = useState<boolean>(false);
  const [hasErrorRemove, setHasErrorRemove] = useState<boolean>(false);
  const contactId = getContactIdFromParams(params);
  const { contact, loadingContact, errorContact } = useContact(contactId);
  const handleDeleteContact = (contactToRemoveId: number = 0) => {
    setIsRemoving(true);
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;
    removeContact(contactToRemoveId, signal)
      .then((response) => {
        if (response === "200") {
          setIsRemoving(false);
          setHasErrorRemove(false);
          dispatch(removeContactAction(contactId));
          history.push("/");
        }
      })
      .catch(() => {
        setHasErrorRemove(true);
      })
      .finally(() => setIsRemoving(false));
  };

  if (errorContact) return <Redirect to="/" />;
  if (loadingContact) return <div>Loading...</div>;

  return (
    <>
      {contact !== null && !loadingContact ? (
        <main className="contact-page">
          <img
            src={contact?.photo}
            alt={`${contact?.name}'s avatar'`}
            className="contact-page__avatar"
          />
          <h1 className="contact-page__name">{contact?.name}</h1>
          <div className="contact-page__actions">
            <NavLink to="/" className="contact-page__link">
              Volver
            </NavLink>
            <button
              className="contact-page__button"
              onClick={() => handleDeleteContact(contact?.id)}
            >
              Eliminar
            </button>
          </div>
          <div className="contact-page__messages">
            {isRemoving ? (
              <p className="contact-page__message contact-page__message--info">
                Eliminando contacto...
              </p>
            ) : null}
            {hasErrorRemove ? (
              <p className="contact-page__message contact-page__message--error">
                Hubo problemas eliminando el contacto.
              </p>
            ) : null}
          </div>
        </main>
      ) : null}
    </>
  );
};
