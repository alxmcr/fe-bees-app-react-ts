import { ContactsActionsProps } from "../../../@types/appPropsTypes";
import { AddIcon } from "../../icons/AddIcon";
import { SearchIcon } from "../../icons/SearchIcon";
import "./ContactsActions.scss";

export const ContactsActions = ({
  textSearch,
  setTextSearch,
  setShowOverlay,
}: ContactsActionsProps) => {
  const handleShowOverlay = () => setShowOverlay(true);
  const handleTextSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextSearch(event.target.value);
  };

  return (
    <header className="contacts-actions">
      <div className="contacts-actions__search">
        <SearchIcon
          className="contacts-actions__icon contacts-actions__icon--primary"
          width={18}
          height={15}
        />
        <input
          type="search"
          id="text-search"
          name="text-search"
          className="contacts-actions__input"
          placeholder="Buscar contacto..."
          value={textSearch}
          maxLength={30}
          onChange={handleTextSearchChange}
        />
      </div>
      <button className="contacts-actions__button" onClick={handleShowOverlay}>
        <AddIcon className="contacts-actions__icon" width={18} height={15} />
        Nuevo Contacto
      </button>
    </header>
  );
};
