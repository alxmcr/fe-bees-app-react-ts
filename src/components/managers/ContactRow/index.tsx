import { NavLink } from "react-router-dom";
import { ContactCardProps } from "../../../@types/appPropsTypes";
import "./ContactRow.scss";

export const ContactRow = ({ contact }: ContactCardProps) => {
  return (
    <div id={`${contact?.id}`} className="contacts-manager__row">
      <div className="contacts-manager__side">
        <img
          src={contact?.photo}
          alt={`${contact?.name}'s avatar'`}
          className="contacts-manager__avatar"
        />
        <div className="contact-manager__info">
          <p className="contacts-manager__name">{contact?.name}</p>
          <NavLink
            to={`/contacts/${contact?.id}`}
            className="contacts-manager__link"
          >
            Eliminar
          </NavLink>
        </div>
      </div>
      <div className="contacts-manager__side">
        <p className="contacts-manager__description">{contact?.description}</p>
      </div>
    </div>
  );
};
