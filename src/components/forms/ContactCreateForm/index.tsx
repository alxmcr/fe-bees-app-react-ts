import { useContext, useState } from "react";
import { ContactCreateFormProps } from "../../../@types/appPropsTypes";
import { ContactsContext } from "../../../providers/ContactsProvider";
import { addContactAction } from "../../../redux/actions/contactsActions";
import { addContact } from "../../../services/contactsServices";
import "./ContactCreateForm.scss";

export const ContactCreateForm = ({
  setShowOverlay,
}: ContactCreateFormProps) => {
  const { dispatch } = useContext(ContactsContext);
  const [photo, setPhoto] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [hasErrorSaveContact, setHasErrorSaveContact] =
    useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSaving(true);
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;

    addContact({ name, photo, description }, signal)
      .then((response) => {
        const contactSaved = response;
        setHasErrorSaveContact(false);
        dispatch(addContactAction(contactSaved));
        resetForm();
      })
      .catch((e: Error) => {
        setHasErrorSaveContact(true);
      })
      .finally(() => {
        setIsSaving(false);
        if (!hasErrorSaveContact) {
          setShowOverlay(false);
        }
      });
  };

  const resetForm = () => {
    setPhoto("");
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-create">
      <div className="form-create__group">
        <label htmlFor="photo">
          URL Imagen de perfil<span className="form-create__mark">*</span>
        </label>
        <input
          type="url"
          className="form-create__input"
          id="photo"
          placeholder="https://beetrack.com/beetracker.jpeg"
          autoComplete="off"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          maxLength={50}
          required
        />
      </div>
      <div className="form-create__group">
        <label htmlFor="name">
          Name<span className="form-create__mark">*</span>
        </label>
        <input
          type="text"
          className="form-create__input"
          id="name"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          required
        />
      </div>
      <div className="form-create__group">
        <label htmlFor="description">
          Descripción<span className="form-create__mark">*</span>
        </label>
        <textarea
          className="form-create__textarea"
          id="description"
          rows={3}
          placeholder="Description"
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-create__actions">
        <button type="submit" className="form-create__button">
          Guardar
        </button>
      </div>
      <div className="form-create__messages">
        {isSaving ? (
          <p className="form-create__message form-create__message--info">
            Guardando el nuevo contacto...
          </p>
        ) : null}
        {hasErrorSaveContact && !isSaving ? (
          <p className="form-create__message form-create__message--error">
            Error al guardar el contacto
          </p>
        ) : null}
      </div>
    </form>
  );
};
