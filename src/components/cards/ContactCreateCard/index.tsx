import { ContactCreateCardProps } from "../../../@types/appPropsTypes";
import { ContactCreateForm } from "../../forms/ContactCreateForm";
import { CloseIcon } from "../../icons/CloseIcon";
import "./ContactCreateCard.scss";

export const ContactCreateCard = ({
  setShowOverlay,
}: ContactCreateCardProps) => {
  const handleCloseCard = () => setShowOverlay(false);

  return (
    <article className="card-contact">
      <header className="card-contact__header">
        <h3 className="card-contact__title">Agregar nuevo contacto</h3>
        <button
          type="button"
          className="card-contact__button card-contact__button--outline"
          onClick={handleCloseCard}
        >
          <CloseIcon className="card-contact__icon" width={15} height={15} />
        </button>
      </header>
      <div className="card-contact__body">
        <ContactCreateForm setShowOverlay={setShowOverlay} />
      </div>
    </article>
  );
};
