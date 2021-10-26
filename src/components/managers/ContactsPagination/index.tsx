import { ContactsPaginationProps } from "../../../@types/appPropsTypes";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import "./ContactsPagination.scss";

export const ContactsPagination = ({
  page = 1,
  setPage,
  nroContacts = 0,
}: ContactsPaginationProps) => {
  return (
    <footer className="pagination">
      {page > 1 ? (
        <button
          className="pagination__button"
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          <ArrowLeftIcon
            className="pagination__icon"
            width={18}
            height={15}
          />
          Anterior página
        </button>
      ) : null}
      {nroContacts > 0 ? (
        <button
          className="pagination__button"
          onClick={() => setPage(page + 1)}
        >
          Siguiente página
          <ArrowRightIcon
            className="pagination__icon"
            width={18}
            height={15}
          />
        </button>
      ) : null}
    </footer>
  );
};
