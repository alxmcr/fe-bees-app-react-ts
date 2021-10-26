import { createContext, useReducer } from "react";
import { ContactsProviderProps } from "../@types/appPropsTypes";
import { ContactsContextProps } from "../@types/appReduxTypes";
import {
  contactsReducers,
  initialStateContacts,
} from "../redux/reducers/contactsReducers";

export const ContactsContext = createContext<ContactsContextProps>({
  state: initialStateContacts,
  dispatch: () => {},
});

export const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const [state, dispatch] = useReducer(contactsReducers, initialStateContacts);
  const value = { state, dispatch };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};
